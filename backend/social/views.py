from django.contrib.auth.models import User
from rest_framework import viewsets,status
from rest_framework.decorators import action,api_view
from rest_framework.response import Response
from .models import Profile,Post,Comment,Story,Message,Notification,Follow
from .serializers import *

class PostViewSet(viewsets.ModelViewSet):
    queryset=Post.objects.select_related("author").prefetch_related("likes","comments__author").order_by("-created_at")
    serializer_class=PostSerializer
    def perform_create(self,serializer):
        user=User.objects.first()
        serializer.save(author=user)
    @action(detail=True,methods=["post"])
    def like(self,request,pk=None):
        post=self.get_object(); user=User.objects.first()
        if not user:return Response({"detail":"Create a user first"},status=400)
        if post.likes.filter(pk=user.pk).exists(): post.likes.remove(user); liked=False
        else: post.likes.add(user); liked=True
        return Response({"liked":liked,"likes":post.likes.count()})
    @action(detail=True,methods=["post"])
    def comment(self,request,pk=None):
        post=self.get_object(); user=User.objects.first()
        if not user:return Response({"detail":"Create a user first"},status=400)
        c=Comment.objects.create(post=post,author=user,text=request.data.get("text",""))
        return Response(CommentSerializer(c).data,status=201)

class StoryViewSet(viewsets.ModelViewSet):
    queryset=Story.objects.select_related("author").order_by("-created_at")
    serializer_class=StorySerializer
    def perform_create(self,serializer): serializer.save(author=User.objects.first())

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Profile.objects.select_related("user").all()
    serializer_class=ProfileSerializer

@api_view(["GET"])
def feed(request):
    return Response(PostSerializer(Post.objects.select_related("author").prefetch_related("likes","comments__author").order_by("-created_at"),many=True).data)

@api_view(["GET","POST"])
def messages_api(request):
    if request.method=="GET":
        return Response(MessageSerializer(Message.objects.select_related("sender","recipient").order_by("created_at"),many=True).data)
    user=User.objects.first()
    recipient=User.objects.exclude(pk=getattr(user,"pk",None)).first()
    if not user or not recipient:return Response({"detail":"Create two users first"},status=400)
    m=Message.objects.create(sender=user,recipient=recipient,text=request.data.get("text",""))
    return Response(MessageSerializer(m).data,status=201)

@api_view(["GET"])
def notifications(request):
    return Response(NotificationSerializer(Notification.objects.order_by("-created_at"),many=True).data)
