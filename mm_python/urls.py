"""mm_python URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Here is where to Add the URL pattern to the main urls.py file in your project directory

from django.contrib import admin
from django.urls import include, path  # make to include 'include' and 'path'
# importing from /home/kali/Desktop/Sr/mm_python/mm_python/views.py for react
from . views import index
from . import views  # needed for adding # react pages urls
# makes it so that this is where the web-app starts
from django.views.generic import RedirectView

urlpatterns = [
    # makes it so that this is where the web-app starts
    path('', RedirectView.as_view(url='/home/', permanent=False)),

    path('admin/', admin.site.urls),
    # saying any url that starts with 'myapp' should be rerouted to this area
    path('myapp/', include('myapp.urls')),

    path('hello/', include('hello.urls')),

    # path('newyear/', include('newyear.urls')), #remember to put the comma ,

    path('tasks/', include('tasks.urls')),

    # if someone calls this empty route it will call the index function
    path('', index),

    path('', views.index, name='index'),  # react for Windows


    # name of app folder
    path('', include('web_terminal.urls')),

    # add additonal steps here
    path('', include('scanning.urls')),

    path('', include('run_command.urls')),



    path('', include('recon.urls')),

    path('', include('tor_map.urls')),

    path('', include('ip_map.urls')),

    path('profile_info/', include('profile_info.urls')),

    path('sherlock/', include('sherlock_search.urls')),

    path('connections/', include('connections.urls')),




    # Card Body Pages
    path('reconicon/', views.index),

    path('weapon/', views.index),

    path('delivery/', views.index),

    path('exploit/', views.index),

    path('install/', views.index),

    path('control/', views.index),

    path('objectives/', views.index),

    path('freq/', views.index),

    path('account/', views.index),

    path('home/', views.index),  # default starting url


    path('hambar/', views.index),

    # Control Links
    path('filedisplaycontrol/', views.index),


    # Weapon Links
    path('filedisplayw/', views.index),
    path('filedisplaykey/', views.index),
    path('filedisplayvirus/', views.index),
    path('filedisplayworm/', views.index),
    path('filedisplayjacking/', views.index),
    path('filedisplaydos/', views.index),


    # Delivery links
    path('filedisplaytext/', views.index),
    path('filedisplaybluetooth/', views.index),
    path('filedisplayemail/', views.index),
    path('filedisplayftp/', views.index),
    path('filedisplayusb/', views.index),
    path('filedisplayweb/', views.index),


    # Recon Links
    path('filedisplayip/', views.index),
    path('filedisplaydomain/', views.index),
    path('phish/', views.index),
    path('smedialogin/', views.index),
    path('filedisplayphone/', views.index),



    path('whois/', include('whois_app.urls')),




    # remember to put the comma ,
]