from django.shortcuts import render


def home(request):
    return render(request, 'core/index.html', {
        'categories': ['All', 'Music', 'Live', 'Coding', 'Minecraft', 'Python', 'Gaming']
    })
