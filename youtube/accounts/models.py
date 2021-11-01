from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from PIL import Image


class User(AbstractUser):
    is_verified = models.BooleanField(default=False)
    profile_image = models.ImageField(
        upload_to='profile_images', default=f'{settings.BASE_DIR}/media/profile_images/default.png')
    description = models.TextField(blank=True, null=True)

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.profile_image.path)

        if img.height > img.width:
            left = 0
            right = img.width
            top = (img.height - img.width) / 2
            bottom = (img.height + img.width) / 2

            img = img.crop((left, top, right, bottom))

            if img.height > 300 or img.width > 300:
                img.save(self.profile_image.path)

        elif img.width > img.height:
            left = (img.width - img.height) / 2
            right = (img.width + img.height) / 2
            top = 0
            bottom = img.height

            img = img.crop((left, top, right, bottom))

            if img.height > 300 or img.width > 300:
                img.save(self.profile_image.path)
