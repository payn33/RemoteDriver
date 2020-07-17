from .models import Email
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit





class UserForm(forms.ModelForm):
    Email = forms.CharField()

    class Meta:
        model = Email
        fields = ('full_name', 'email',)

        helper = FormHelper()
        helper.form_method = 'POST'
        helper.add_input(Submit('Subscribe', 'Subscribe', css_class='sub'))


    full_name = forms.CharField(
        label = "Full Name", 
        max_length = 100,
        required = True,
    )    

    email = forms.CharField(
        label = "Email",
        max_length = 100,
        required = True,
    )

    
        
