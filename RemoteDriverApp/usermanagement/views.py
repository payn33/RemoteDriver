from django.shortcuts import render, redirect
from .models import Email
from usermanagement.forms import UserData
#from crispy_forms.layout import Submit
from django.middleware import csrf

# Create your views here.

def userData(request):
    if request.method == 'POST':
        full_name = request.POST.get('name')
        email_address = request.POST.get('email')
        data = Email()
        data = Email()
        data.full_name = full_name
        data.email_address = email_address
        data.save()
        
        # form = userData(request.POST)
        # if form.is_valid():
        #     form.save()
        full_name = request.POST.get('name')
        email_address = request.POST.get('email')
        print(full_name,email_address)
        #     email_obj = Email(full_name = full_name, email_address = email_address)
        #     email_obj.save()

        # else:
        #     form = userData()

    return render(request, 'index.html')


def get_or_create_csrf_token(request):
    token = request.META.get('CSRF_COOKIE', None)
    if token is None:
        token = csrf._get_new_csrf_key()
        request.META['CSRF_COOKIE'] = token
    request.META['CSRF_COOKIE_USED'] = True
    return token