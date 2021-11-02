from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse('Home page. <a href="http://127.0.0.1:8000/accounts/register">Register<a>')
