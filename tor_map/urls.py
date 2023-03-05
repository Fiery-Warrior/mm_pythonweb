from django.urls import path
from . import views

urlpatterns = [
    path('tor_map/', views.tor_map, name='tor_map'),
]
