from django.shortcuts import render
import requests
from bs4 import BeautifulSoup


def get_profile_info(soup):
    item = soup.select_one("meta[property='og:description']")

    name = item.find_previous_sibling().get("content").split("•")[0]
    followers = item.get("content").split(",")[0]
    following = item.get("content").split(",")[1].strip()

    profile_pic = soup.select_one("meta[property='og:image']")
    profile_pic_url = profile_pic.get("content")

    phone_number = soup.select_one("meta[property='instapp:contact_phone_number']")
    email = soup.select_one("meta[property='instapp:contact_email']")

    if phone_number:
        phone_number = phone_number.get("content")
    else:
        phone_number = "Not available"

    if email:
        email = email.get("content")
    else:
        email = "Not available"

    profile_data = {
        'name': name,
        'followers': followers,
        'following': following,
        'phone_number': phone_number,
        'email': email,
        'profile_pic': profile_pic_url
    }

    return profile_data


def profile_info(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        if username:
            url = f"https://www.instagram.com/{username}/"
            try:
                html = requests.get(url)
                soup = BeautifulSoup(html.text, 'lxml')
                profile_data = get_profile_info(soup)
                return render(request, 'profile_info.html', {'profile_data': profile_data})
            except Exception as e:
                return render(request, 'profile_info.html', {'error': 'Error: {}'.format(str(e))})

    return render(request, 'search_username.html')
