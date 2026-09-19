from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    bio=models.TextField(blank=True)
    avatar=models.ImageField(upload_to="avatars/",blank=True,null=True)
    def __str__(self): return self.user.username

class Follow(models.Model):
    follower=models.ForeignKey(User,on_delete=models.CASCADE,related_name="following")
    following=models.ForeignKey(User,on_delete=models.CASCADE,related_name="followers")
    created_at=models.DateTimeField(auto_now_add=True)
    class Meta: unique_together=("follower","following")

class Post(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE,related_name="posts")
    image=models.ImageField(upload_to="posts/",blank=True,null=True)
    caption=models.TextField(blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    likes=models.ManyToManyField(User,related_name="liked_posts",blank=True)
    def __str__(self): return f"{self.author.username}: {self.caption[:30]}"

class Comment(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE,related_name="comments")
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    text=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

class Story(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    image=models.ImageField(upload_to="stories/",blank=True,null=True)
    caption=models.CharField(max_length=240,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    sender=models.ForeignKey(User,on_delete=models.CASCADE,related_name="sent_messages")
    recipient=models.ForeignKey(User,on_delete=models.CASCADE,related_name="received_messages")
    text=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

class Notification(models.Model):
    recipient=models.ForeignKey(User,on_delete=models.CASCADE,related_name="notifications")
    text=models.CharField(max_length=255)
    read=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
