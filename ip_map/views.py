import requests
from PIL import Image, ImageDraw, ImageFont
import time
import os
from django.http import HttpResponse

from mm_python.settings import BASE_DIR

# API endpoint for IP info
IPINFO_URL = 'https://ipinfo.io'

# Load the map image
map_image = Image.open(os.path.join(BASE_DIR, 'wmap.png'))

# Get the size of the map image
map_width, map_height = map_image.size

# Load the pin icon image
pin_image = Image.open(os.path.join(BASE_DIR, 'pin.png'))

# Get the size of the pin icon image
pin_width, pin_height = pin_image.size

# Initialize previous IP addresses to an empty list
prev_ips = []

def ip_map(request):
    global prev_ips
    while True:
        # Make a request to the API to retrieve IP location information
        response = requests.get(IPINFO_URL)

        # Parse the response JSON to retrieve the desired information
        ip_info = response.json()

        # Get the current IP address
        ip = ip_info.get('ip')
        

        # Check if the IP address has changed
        if ip not in prev_ips:
            # Add the current IP address to the list of previous IP addresses
            prev_ips.append(ip)

            # Get the location coordinates
            location = ip_info.get('loc')
            user_latitude, user_longitude = location.split(',')
            user_latitude = float(user_latitude)
            user_longitude = float(user_longitude)

            # Calculate the coordinates of the pin icon based on the user's location
            if -125 <= user_longitude <= -34 and 31 <= user_latitude <= 83:
                pin_x = int((user_longitude + 180) * (map_width / 750))
                print("North or south America")
                print("longitude: ", user_longitude)
                print("latitude: ", user_latitude)
                print("ip_info: ", ip_info)
                print("ip: ", ip)

            else:
                if user_longitude < -125 or user_longitude > 60 or user_latitude < -60 or user_latitude > 83:
                    print("Other place")
                    print("longitude: ", user_longitude)
                    print("latitude: ", user_latitude)
                    print("ip_info: ", ip_info)
                    print("ip: ", ip)
                pin_x = int((user_longitude + 180) * (map_width / 360))

            pin_y = int((90 - user_latitude) * (map_height / 200))

            # Open the latest saved map image based on the current IP address
            map_with_pins = map_image.copy()
            for prev_ip in prev_ips:
                if prev_ip != ip and os.path.exists(f'map_with_pin_{prev_ip}.png'):
                    # Add the pin icon to the map image
                    prev_map_with_pin = Image.open(f'map_with_pin_{prev_ip}.png')
                    map_with_pins.paste(prev_map_with_pin, (0, 0))

            # Add the pin icon to the map image
            map_with_pins.paste(
                pin_image, (pin_x - int(pin_width / 2), pin_y - pin_height), mask=pin_image)

            # Save the modified map image with all the pins
            map_with_pins.save(f'map_with_pin_{ip}.png', format='PNG')
        # Load the latest map image with pins and return it as the
        with open(f'map_with_pin_{ip}.png', 'rb') as f:
            response = HttpResponse(f.read(), content_type='image/png')
            return response
