from django.db import models

# Create your models here.
class Video(models.Model):
    id_video = models.CharField(max_length=2000)
    output = models.CharField(max_length=200000)

class Audio(models.Model):
    id_video = models.CharField(max_length=2000)
    output = models.CharField(max_length=200000)