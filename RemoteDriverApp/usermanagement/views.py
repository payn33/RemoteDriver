from django.shortcuts import render, redirect
from .models import Email
from usermanagement.forms import UserForm
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django.middleware import csrf

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


def get_or_create_csrf_token(request):
    token = request.META.get('CSRF_COOKIE', None)
    if token is None:
        token = csrf._get_new_csrf_key()
        request.META['CSRF_COOKIE'] = token
    request.META['CSRF_COOKIE_USED'] = True
    return token