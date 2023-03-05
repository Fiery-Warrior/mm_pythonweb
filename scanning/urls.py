from django.urls import path

from . import views

urlpatterns = [
    #name of web url
    path('packet_capture/', views.packet_capture, name='packet_capture'),

]