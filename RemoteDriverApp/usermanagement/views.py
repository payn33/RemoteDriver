from django.shortcuts import render
from .models import Email
# Create your views here.

def landingpage(request):
    return render(request, "index.html")

def userData(request):
    if request.method == 'POST'

        form = userData(request.POST)
        if form.is_valid()
             full_name = request.POST.get('full_name', '')
             email_address = request.POST.get('email_address', '')
             email_obj = Email(full_name = full_name, email_address = email_address)
             email_obj.save()

        else:
            form = userData()

        return render(request, 'url', {
            'form': form
        })