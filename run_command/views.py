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