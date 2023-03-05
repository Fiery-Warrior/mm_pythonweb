from django.urls import path

from . import views

urlpatterns = [
    #name of web url
    path('recon/', views.web_terminal, name='recon'),

]