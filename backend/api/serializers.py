from rest_framework import serializers
from .models import Video,Audio

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class Student1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = '__all__'
      