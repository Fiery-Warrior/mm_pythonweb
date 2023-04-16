from django.shortcuts import render
import whois


def get_whois(request):
    if request.method == 'POST':
        domain = request.POST.get('domain')
        w = whois.whois(domain)
        return render(request, 'whois.html', {'data': w})
    else:
        return render(request, 'whois.html')
