from rest_framework import serializers
from .models import Profile, Post, Comment, Story, Message, Notification

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    followers_count = serializers.IntegerField(source="user.followers.count", read_only=True)
    following_count = serializers.IntegerField(source="user.following.count", read_only=True)
    class Meta:
        model = Profile
        fields = ["id", "username", "bio", "avatar", "followers_count", "following_count"]

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username", read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "author", "text", "created_at"]

class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username", read_only=True)
    author_id = serializers.IntegerField(source="author.id", read_only=True)
    likes_count = serializers.IntegerField(source="likes.count", read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    liked = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = ["id", "author", "author_id", "image", "caption", "created_at", "likes_count", "liked", "comments"]
    def get_liked(self, obj):
        user = self.context["request"].user
        return user.is_authenticated and obj.likes.filter(pk=user.pk).exists()

class StorySerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username", read_only=True)
    class Meta:
        model = Story
        fields = ["id", "author", "image", "caption", "created_at"]

class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.CharField(source="sender.username", read_only=True)
    recipient = serializers.CharField(source="recipient.username", read_only=True)
    class Meta:
        model = Message
        fields = ["id", "sender", "recipient", "text", "created_at"]

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"
