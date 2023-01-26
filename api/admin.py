from django.contrib import admin
from .models import Video,Audio

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ["id","id_video","output"]

@admin.register(Audio)
class AudioAdmin(admin.ModelAdmin):
    list_display = ["id","id_video","output"]
