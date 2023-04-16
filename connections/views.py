"""
from django.shortcuts import render
from django.http import HttpResponse
import socket

SERVER_IP = '172.20.51.133'  # replace with server IP
SERVER_PORT = 1234  # replace with server port

def connections(request):
    data_received = None
    if request.method == 'POST':
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
            
            # Add condition to break out of the loop
            if data == 'exit':
                break
            
            data_received = data
        
    context = {
        'SERVER_IP': SERVER_IP,
        'SERVER_PORT': SERVER_PORT,
        'data_received': data_received,
    }
    return render(request, 'connect.html', context)
"""


from django.shortcuts import render
from django.http import HttpResponse
import socket

SERVER_IP = '172.20.51.133'  # replace with server IP
SERVER_PORT = 1234  # replace with server port

def connections(request):
    data_received = None
    connection_info = None
    
    if request.method == 'POST':
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server_socket.bind((SERVER_IP, SERVER_PORT))
        server_socket.listen()

        print(f"Listening on {SERVER_IP}:{SERVER_PORT}")
        
        connection_info = "Waiting for connection..." # add initial connection info to context
        
        while True:
            conn, addr = server_socket.accept()
            print(f"Received connection from {addr[0]}:{addr[1]}")
            connection_info = f"Your Machine {addr[0]}:{addr[1]}"
            data = conn.recv(1024).decode()
            print(f"Received message: {data}")
            conn.close()
            
            if data == 'exit':
                break
            
            data_received = data
            break   # break after receiving first message
        
    context = {
        'SERVER_IP': SERVER_IP,
        'SERVER_PORT': SERVER_PORT,
        'data_received': data_received,
        'connection_info': connection_info,
    }
    return render(request, 'connect.html', context)
