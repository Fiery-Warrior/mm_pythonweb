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
#Here is where to Add the URL pattern to the main urls.py file in your project directory

from django.contrib import admin
from django.urls import include, path #make to include 'include' and 'path'
from . views import index #importing from /home/kali/Desktop/Sr/mm_python/mm_python/views.py for react
from . import views # needed for adding # react pages urls 

urlpatterns = [
    path('admin/', admin.site.urls),
    #saying any url that starts with 'myapp' should be rerouted to this area
    path('myapp/', include('myapp.urls')),

    path('hello/', include('hello.urls')),

    #path('newyear/', include('newyear.urls')), #remember to put the comma ,

    path('tasks/', include('tasks.urls')),

    path('', index), #if someone calls this empty route it will call the index function
    
    #name of app folder
    path('', include('web_terminal.urls')),    
    
    #add additonal steps here
    path('', include('scanning.urls')),

    path('', include('run_command.urls')),

    path('', include('recon.urls')),

    path('', include('tor_map.urls')),

    path('', include('ip_map.urls')),

    path('profile_info/', include('profile_info.urls')),

    path('sherlock/', include('sherlock_search.urls')),



    path('reconicon/', views.index),

    path('weapon/', views.index),
    
    path('delivery/', views.index),

    path('exploit/', views.index),

    path('install/', views.index),

    path('control/', views.index),

    path('objectives/', views.index),

    path('freq/', views.index),

    path('account/', views.index),

    path('hambar/', views.index),

    path('filedisplayw/', views.index),

    path('filedisplaykey/', views.index),



#remember to put the comma ,
]
