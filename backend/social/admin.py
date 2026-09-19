from django.contrib import admin
from .models import Profile,Follow,Post,Comment,Story,Message,Notification
admin.site.register([Profile,Follow,Post,Comment,Story,Message,Notification])
