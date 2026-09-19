from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, StoryViewSet, ProfileViewSet, feed, messages_api, notifications, register, login, logout, me, follow

router = DefaultRouter()
router.register("posts", PostViewSet)
router.register("stories", StoryViewSet)
router.register("profiles", ProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("auth/register/", register),
    path("auth/login/", login),
    path("auth/logout/", logout),
    path("auth/me/", me),
    path("feed/", feed),
    path("follow/", follow),
    path("messages/", messages_api),
    path("notifications/", notifications),
]
