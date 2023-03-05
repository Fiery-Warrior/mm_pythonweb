# views.py
"""
from django.shortcuts import render, redirect
import subprocess
import os
from django.contrib.sessions.backends.file import SessionStore

def web_terminal(request):
    # Check if the request method is POST
    if request.method == 'POST':
        # Get the command from the request
        cmd = request.POST.get('command')

        # Get the session store for the current session
        session = SessionStore(request.session.session_key)

        # Check if there is a current working directory in the session data
        if 'cwd' in session:
            cwd = session['cwd']
        else:
            cwd = None

        # Check if the command is a change directory command
        if cmd.startswith('cd'):
            # Get the new directory from the command
            new_dir = cmd.split(' ')[1]
            try:
                # Change the current working directory
                os.chdir(new_dir)
                # Get the new current working directory
                cwd = os.getcwd()
                # Store the new current working directory in the session
                session['cwd'] = cwd
                # Set the output to an empty string
                output = ""
            except FileNotFoundError:
                # Set the output to an error message if the new directory does not exist
                output = f"cd: no such file or directory: {new_dir}"
            except PermissionError:
                # Set the output to an error message if the current user does not have permission to access the new directory
                output = f"cd: permission denied: {new_dir}"

        # If the command is not a change directory command, run it as a shell command
        else:
            try:
                # Run the shell command and capture its output
                output = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, cwd=cwd).stdout.decode()
            except subprocess.CalledProcessError as e:
                # If the shell command returns a non-zero exit code, set the output to its error message
                output = e.stderr.decode()

        # Save the updated session data
        session.save()

        # Replace newline characters with line breaks
        output = output.replace('\n', '<br>')

        # Render the output using the web_terminal.html template
        #return render(request, 'web_terminal.html', {'output': output})
        return render(request, 'CE.html', {'output': output})

    # If the request method is not POST, render the web_terminal.html template without any output
    return render(request, 'CE.html', {})
"""

from django.shortcuts import render, redirect
import subprocess
import os
from django.contrib.sessions.backends.file import SessionStore

def web_terminal(request):
    # Check if the request method is POST
    if request.method == 'POST':
        # Get the command from the request
        cmd = request.POST.get('command')

        # Get the session store for the current session
        session = SessionStore(request.session.session_key)

        # Check if there is a current working directory in the session data
        if 'cwd' in session:
            cwd = session['cwd']
        else:
            cwd = None

        # Check if the command is a change directory command
        if cmd.startswith('cd'):
            # Get the new directory from the command
            new_dir = cmd.split(' ')[1]
            try:
                # Change the current working directory
                os.chdir(new_dir)
                # Get the new current working directory
                cwd = os.getcwd()
                # Store the new current working directory in the session
                session['cwd'] = cwd
                # Set the output to an empty string
                output = ""
            except FileNotFoundError:
                # Set the output to an error message if the new directory does not exist
                output = f"cd: no such file or directory: {new_dir}"
            except PermissionError:
                # Set the output to an error message if the current user does not have permission to access the new directory
                output = f"cd: permission denied: {new_dir}"

        # If the command is not a change directory command, run it as a shell command
        else:
            try:
                # Run the shell command and capture its output
                output = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, cwd=cwd).stdout.decode()
            except subprocess.CalledProcessError as e:
                # If the shell command returns a non-zero exit code, set the output to its error message
                output = e.stderr.decode()

        # Save the updated session data
        session.save()

        # Replace newline characters with line breaks
        output = output.replace('\n', '<br>')

        # Render the output using the web_terminal.html template
        return render(request, 'web_terminal.html', {'output': output})

    # If the request method is not POST, render the CE.html template without any output
    return render(request, 'web_terminal.html', {})
