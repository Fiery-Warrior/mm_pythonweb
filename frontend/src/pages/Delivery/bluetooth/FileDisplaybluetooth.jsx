import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Server.py</h2>
        <pre className="file-display-content">
          <code>
            {`
import bluetooth

# server address
server_address = ''

# server port
server_port = 1

# create a Bluetooth socket
server_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)

# bind the socket to the server address and port
server_sock.bind((server_address, server_port))

# listen for incoming connections
server_sock.listen(1)

# accept the client connection
client_sock, client_info = server_sock.accept()

# send a message to the client
message = 'Hello, client!'
client_sock.send(message)

# close the client socket
client_sock.close()

# close the server socket
server_sock.close()
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Client.py</h2>
        <pre className="file-display-content">
          <code>
            {`
import bluetooth

# server address
server_address = 'XX:XX:XX:XX:XX:XX'

# server port
server_port = 1

# create a Bluetooth socket
client_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)

# connect to the server
client_sock.connect((server_address, server_port))

# receive the message from the server
message = client_sock.recv(1024)

# print the message
print(message)

# close the client socket
client_sock.close()
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
Install using: pip install PyBluez
<br/>
<br/>
This is an example of a client-server program using Bluetooth sockets to exchange data between two devices.
<br/>
<br/>
The server.py script creates a Bluetooth socket, binds it to a server address and port, listens for incoming connections, and accepts the client connection. Once the client is connected, it sends a message to the client socket, and then closes the sockets and the server.
<br/>
<br/>
The client.py script creates a Bluetooth socket, connects it to the server address and port, and receives the message sent by the server. It then prints the message, and closes the client socket.


        </p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
