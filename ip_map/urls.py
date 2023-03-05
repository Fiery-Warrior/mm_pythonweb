from django.urls import path
from . import views

urlpatterns = [
    path('ip_map/', views.ip_map, name='ip_map'),
]
