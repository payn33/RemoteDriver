from .models import Email
from crispy_forms.helper import FormHelper



class UserForm(forms.Modelform):
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

    class Meta:
        model = Email
        fields = ('full_name', 'email',)
        
