#basically a request handler -> does not have html or template
#request -> response
#request handler
#action
#pull data from db
#transform data
#send emails
#and much more

from django.shortcuts import render
from django.http import HttpResponse
import subprocess


"""def index(request):
    return render(request, 'index.html')"""

#first view function
#next step: mapping this view function to a url, so when getting a request to that url this function will be called
#will also need to import this url conf in the main url.py for this project which is located /home/kali/Desktop/Sr/mm_python/mm_python/urls.py
def sayhello(request):
    return HttpResponse('Hello World')


"""def run_terminal_command(request):
    command = request.GET.get('command', '')
    result = subprocess.check_output(command, shell=True).decode()
    return HttpResponse(result)"""

"""
#never worked
def run_command(request):
    if request.method == 'POST':
        command = request.POST.get('command')
        result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return render(request, 'myapp/templates/run_command.html', {'result': result.stdout.decode()})
    return render(request, 'myapp/templates/run_command.html')
"""

"""
def run_command(request):
    output = None
    if request.method == 'POST':
        command = request.POST.get('command')
        try:
            output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT).decode('utf-8')
        except subprocess.CalledProcessError as e:
            output = e.output.decode('utf-8')
    return render(request, 'myapp/templates/run_command.html', {'output': output})
"""

from django import forms
from django.http import HttpResponseBadRequest
from django.http import HttpResponse
#from django.shortcuts import render
#from django.urls import reverse

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    # priority = forms.IntegerField(label="Priority", min_value=1, max_value=5)

# Create your views here.
def index(request):
    return HttpResponse("Hello, world!")

