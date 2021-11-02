from django.shortcuts import render
from django.http import HttpResponse


def register(request):
    # return HttpResponse('Registration page')
    return render(request, 'accounts/register.html')
