from django.urls import path
from .views import landingpage,userData

from .views import landingpage


urlpatterns = [
    path('', userData)
]