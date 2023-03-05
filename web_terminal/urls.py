from django.urls import path

from . import views

urlpatterns = [
    #name of web url
    path('web-terminal/', views.web_terminal, name='web-terminal'),

]