from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet,StoryViewSet,ProfileViewSet,feed,messages_api,notifications
router=DefaultRouter()
router.register("posts",PostViewSet)
router.register("stories",StoryViewSet)
router.register("profiles",ProfileViewSet)
urlpatterns=[path("",include(router.urls)),path("feed/",feed),path("messages/",messages_api),path("notifications/",notifications)]
