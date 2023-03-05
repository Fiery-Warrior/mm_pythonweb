#Here is where it maps the view to a URL in urls.py file in your app directory

from django.urls import path
#from .views import run_command
from . import views

#urlconf
"""urlpatterns = [
    path('hello/',views.sayhello)
]"""


"""
urlpatterns = [
    path('run_command/', views.run_terminal_command, name='run_command'),
]
"""

"""
urlpatterns = [
    path('run_command/', views.run_command, name='run_command'),
]
"""

urlpatterns = [
    path("", views.index, name="index"),
]