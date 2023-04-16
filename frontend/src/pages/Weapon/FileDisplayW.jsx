import React, { useState, useEffect } from 'react';
import './filedisplay.css';

const FileDisplayW = () => {

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
        <h2 className="file-display-heading">client.py</h2>
        <pre className="file-display-content">
          <code>
            {`
import socket
import subprocess
import bluetooth


server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('', 80))
host, port = server.getsockname()
server.listen(1)

print(f"Server listening on {host}:{port}")  # remove after testing

conn, addr = server.accept()
print(f"Received connection from {addr}")  # remove after testing

while True:
    data = conn.recv(1024)
    if not data:
        break

    command = data.decode().strip()
    if command == 'quit':
        conn.sendall(b'Quitting...')
        break
    # devices nearby
    elif command == 'bluetooth':
        import bluetooth
        print("looking for bluetooth devices ...")  # remove after testing
        devices = bluetooth.discover_devices(lookup_names=True)
        output = "\n".join(
            [f"Address: {addr} | Name: {name}" for addr, name in devices])
        conn.sendall(output.encode())

    else:
        try:
            output = subprocess.check_output(command, shell=True)
            conn.sendall(output)
        except subprocess.CalledProcessError as e:
            error_message = f"An error occurred: {e}. Please try again."
            conn.sendall(error_message.encode())


conn.close()
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">This page displays the contents of server.py and client.py files.
        <br/>
        The first code is a simple Django view that runs a command on a remote server. It accepts a command from a user via an HTTP POST request and sends it to a server over a socket connection. It then receives the output of the command and renders it to an HTML template. This code can be used to remotely execute commands on a server or a remote device.
        <br/>
        <br/>
        The second code is a server program that listens for incoming connections over a socket connection. It accepts commands from the connected client, including a "quit" command to terminate the connection. If the command is not "quit," the code executes the command using subprocess and returns the output to the client. It also includes a command to search for nearby Bluetooth devices. This code can be used to remotely control a device or to monitor a remote device.        
        
        
        
        </p>
      </div>
    </div>
  );
};

export default FileDisplayW;
