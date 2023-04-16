from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_whois, name='get_whois'),
]
