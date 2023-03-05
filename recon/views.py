#views.py\
from django.templatetags.static import static
from django.shortcuts import render, redirect
import subprocess
import os
from django.contrib.sessions.backends.file import SessionStore
from django.templatetags.static import static
from django.shortcuts import render
def web_terminal(request):
    return render(request, 'web_terminal.html', {'react_app': static('reconr/build/index.html')})
