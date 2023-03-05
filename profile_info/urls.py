from django.urls import path
from . import views

app_name = 'profile_info'

urlpatterns = [
    path('', views.profile_info, name='profile_info'),
]
