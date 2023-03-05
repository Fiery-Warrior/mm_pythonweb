from django.shortcuts import render
import subprocess

def packet_capture(request):
    if request.method == 'GET':
        return render(request, 'packet_capture.html')
    elif request.method == 'POST':
        password = request.POST.get('password')
        command = f"echo {password} | sudo -S /bin/python /home/kali/Desktop/Scanning/capture_analyzeWire.py"
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
        output, error = process.communicate()

        if error:
            packet_output = error
        else:
            packet_output = output.decode("utf-8")

        return render(request, 'packet_capture.html', {'packet_output': packet_output})

"""from django.shortcuts import render
import subprocess
import time

def packet_capture(request):
    if request.method == 'GET':
        return render(request, 'packet_capture.html')
    elif request.method == 'POST':
        password = request.POST.get('password')
        command = f"echo {password} | sudo -S /bin/python /home/kali/Desktop/Scanning/capture_analyzeWire.py"
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
        output, error = process.communicate()

        if error:
            packet_output = error
        else:
            packet_output = output.decode("utf-8")

        return render(request, 'packet_capture.html', {'packet_output': packet_output, 'loading': True})"""

