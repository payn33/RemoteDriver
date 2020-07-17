from django.shortcuts import render, redirect
from .models import Email
from usermanagement.forms import UserForm
# Create your views here.

def landingpage(request):
    return render(request, "index.html")

def userData(request):
    if request.method == 'POST':

        form = userData(request.POST)
        if form.is_valid():
            form.save()
             full_name = request.POST.get('full_name', '')
             email_address = request.POST.get('email_address', '')
             email_obj = Email(full_name = full_name, email_address = email_address)
             email_obj.save()

        else:
            form = userData()

        return render(request, 'index.html', {
            'form': form
        })