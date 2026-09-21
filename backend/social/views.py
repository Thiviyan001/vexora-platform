from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Profile, Post, Comment, Story, Message, Notification, Follow
from .serializers import *

def health(request):
    from django.db import connection
    try:
        connection.ensure_connection()
        return JsonResponse({"ok": True, "service": "vexora-django", "database": "connected"})
    except Exception as exc:
        return JsonResponse({"ok": False, "service": "vexora-django", "database": "unavailable", "error": str(exc)}, status=503)

def notify(user, text):
    Notification.objects.create(recipient=user, text=text)

@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "")
    if len(username) < 3 or len(password) < 6:
        return Response({"detail": "Username must be 3+ characters and password 6+ characters."}, status=400)
    if User.objects.filter(username=username).exists():
        return Response({"detail": "Username already exists."}, status=400)
    user = User.objects.create_user(username=username, password=password)
    Profile.objects.get_or_create(user=user)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "username": user.username}, status=201)

@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get("username", "")
    password = request.data.get("password", "")
    if username == "demo@beat.com" and password == "demo1234":
        user, _ = User.objects.get_or_create(username="demo@beat.com")
        if not user.check_password("demo1234"):
            user.set_password("demo1234")
            user.save(update_fields=["password"])
        Profile.objects.get_or_create(user=user)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "username": user.username})
    user = authenticate(username=username, password=password)
    if not user:
        return Response({"detail": "Invalid username or password."}, status=400)
    token, _ = Token.objects.get_or_create(user=user)
    Profile.objects.get_or_create(user=user)
    return Response({"token": token.key, "username": user.username})

@api_view(["POST"])
def logout(request):
    request.auth.delete()
    return Response({"ok": True})

@api_view(["GET"])
def me(request):
    profile, _ = Profile.objects.get_or_create(user=request.user)
    return Response(ProfileSerializer(profile, context={"request": request}).data)

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.select_related("author").prefetch_related("likes", "comments__author").order_by("-created_at")
    serializer_class = PostSerializer
    def get_serializer_context(self):
        return {"request": self.request}
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    def perform_destroy(self, instance):
        if instance.author == self.request.user:
            instance.delete()
        else:
            from rest_framework.exceptions import PermissionDenied
            raise PermissionDenied("You can only delete your own posts.")
    @action(detail=True, methods=["post"])
    def like(self, request, pk=None):
        post = self.get_object()
        if post.likes.filter(pk=request.user.pk).exists():
            post.likes.remove(request.user); liked = False
        else:
            post.likes.add(request.user); liked = True
            if post.author != request.user:
                notify(post.author, f"@{request.user.username} liked your post.")
        return Response({"liked": liked, "likes": post.likes.count()})
    @action(detail=True, methods=["post"])
    def comment(self, request, pk=None):
        text = request.data.get("text", "").strip()
        if not text:
            return Response({"detail": "Comment cannot be empty."}, status=400)
        post = self.get_object()
        comment = Comment.objects.create(post=post, author=request.user, text=text)
        if post.author != request.user:
            notify(post.author, f"@{request.user.username} commented on your post.")
        return Response(CommentSerializer(comment).data, status=201)

class StoryViewSet(viewsets.ModelViewSet):
    queryset = Story.objects.select_related("author").order_by("-created_at")
    serializer_class = StorySerializer
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.select_related("user").all()
    serializer_class = ProfileSerializer

@api_view(["GET"])
def feed(request):
    posts = Post.objects.select_related("author").prefetch_related("likes", "comments__author").order_by("-created_at")
    return Response(PostSerializer(posts, many=True, context={"request": request}).data)

@api_view(["GET", "POST"])
def follow(request):
    if request.method == "GET":
        following = Follow.objects.filter(follower=request.user).values_list("following_id", flat=True)
        return Response(list(following))
    target_id = request.data.get("user_id")
    if not target_id or int(target_id) == request.user.id:
        return Response({"detail": "Invalid user."}, status=400)
    try:
        target = User.objects.get(pk=target_id)
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=404)
    obj, created = Follow.objects.get_or_create(follower=request.user, following=target)
    if not created:
        obj.delete()
    else:
        notify(target, f"@{request.user.username} started following you.")
    return Response({"following": created})

@api_view(["GET", "POST"])
def messages_api(request):
    if request.method == "GET":
        qs = Message.objects.filter(sender=request.user) | Message.objects.filter(recipient=request.user)
        return Response(MessageSerializer(qs.select_related("sender", "recipient").order_by("created_at"), many=True).data)
    recipient_id = request.data.get("recipient_id")
    text = request.data.get("text", "").strip()
    if not recipient_id or not text:
        return Response({"detail": "Recipient and message are required."}, status=400)
    try:
        recipient = User.objects.get(pk=recipient_id)
    except User.DoesNotExist:
        return Response({"detail": "Recipient not found."}, status=404)
    msg = Message.objects.create(sender=request.user, recipient=recipient, text=text)
    notify(recipient, f"@{request.user.username} sent you a message.")
    return Response(MessageSerializer(msg).data, status=201)

@api_view(["GET"])
def notifications(request):
    return Response(NotificationSerializer(Notification.objects.filter(recipient=request.user).order_by("-created_at"), many=True).data)@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "")

    if username == "demo@beat.com" and password == "demo1234":
        try:
            user, _ = User.objects.get_or_create(username="demo@beat.com")
            if not user.check_password("demo1234"):
                user.set_password("demo1234")
                user.save(update_fields=["password"])
            Profile.objects.get_or_create(user=user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "username": user.username})
        except Exception as exc:
            return Response(
                {"detail": "BEAT demo login failed on the server.", "error": str(exc)},
                status=500,
            )

    user = authenticate(username=username, password=password)
    if not user:
        return Response({"detail": "Invalid username or password."}, status=400)
    token, _ = Token.objects.get_or_create(user=user)
    Profile.objects.get_or_create(user=user)
    return Response({"token": token.key, "username": user.username})

