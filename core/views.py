from django.shortcuts import render


def home(request):
    return render(request, 'core/index.html', {
        'categories': ['All', 'Music', 'Live', 'Coding', 'Minecraft', 'Python', 'Gaming', 'Music mix', 'Alan Becker', 'Puzzle Games', 'Anime', 'osu!', 'Dubstep', 'EDM', 'Chess openings', 'Mixes', 'Ocean', 'Computer', 'xQc', 'Game development', 'Oceans', 'Background music', 'Ed Sheeran', 'Chill-out music', 'Recently uploaded', 'Live', 'New to you']
    })
