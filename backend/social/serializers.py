from rest_framework import serializers
from .models import Profile,Post,Comment,Story,Message,Notification

class ProfileSerializer(serializers.ModelSerializer):
    username=serializers.CharField(source="user.username",read_only=True)
    class Meta:
        model=Profile
        fields=["id","username","bio","avatar"]

class CommentSerializer(serializers.ModelSerializer):
    author=serializers.CharField(source="author.username",read_only=True)
    class Meta:
        model=Comment
        fields=["id","author","text","created_at"]

class PostSerializer(serializers.ModelSerializer):
    author=serializers.CharField(source="author.username",read_only=True)
    likes_count=serializers.IntegerField(source="likes.count",read_only=True)
    comments=CommentSerializer(many=True,read_only=True)
    class Meta:
        model=Post
        fields=["id","author","image","caption","created_at","likes_count","comments"]

class StorySerializer(serializers.ModelSerializer):
    author=serializers.CharField(source="author.username",read_only=True)
    class Meta:
        model=Story
        fields=["id","author","image","caption","created_at"]

class MessageSerializer(serializers.ModelSerializer):
    sender=serializers.CharField(source="sender.username",read_only=True)
    recipient=serializers.CharField(source="recipient.username",read_only=True)
    class Meta:
        model=Message
        fields=["id","sender","recipient","text","created_at"]

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notification
        fields="__all__"
