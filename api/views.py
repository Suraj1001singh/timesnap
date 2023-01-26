from .models import Video,Audio
from django.shortcuts import render
from .serializers import StudentSerializer,Student1Serializer
from rest_framework.generics  import ListAPIView
from django.http import HttpResponse
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework.parsers import JSONParser
import os
import json
# Create your views here.

#class StudentList(ListAPIView):
 #   queryset = Student.objects.all()
  #  serializer_class = StudentSerializer

@api_view(('GET',))
@renderer_classes((JSONRenderer,))
def StudentList1(request):
    #os.system('python AutoTimeStamp.py '+request.GET['id'])
    # store = {
    #     "id_video" : "123",
    #     "response" : "Hello"
    # }
    # print("H3lll")
    #if Video.collection.filter(id_video="123").exists():
    #   print("H3lllitritrt")
    try:
      vid = Video.objects.get(id_video=request.GET['id'])
      print(vid.id_video)
      print(vid.output)
    except Video.DoesNotExist:
      os.system('python AutoTimeStamp.py '+request.GET['id'])
      try:
        vid = Video.objects.get(id_video=request.GET['id'])
        #print(vid.output)
      except Video.DoesNotExist:
        print("No idea")
    #store = JSONParser().parse(store)
    #store = json.dumps(store)
    #video = Video.objects.create(id_video="123",output="Bye")
    #video.save()
    #video_serializer = StudentSerializer(data=store)
    #if video_serializer.is_valid():
     #   video_serializer.save()
      #  print("Hello")
    #print("Hello123")

    
    return Response({'id':vid.id_video,'output':vid.output})
 

@api_view(('POST',))
@renderer_classes((JSONRenderer,))
def VideoCapture(request):
  #print("Hello")
  #print(request.body)
  #print(request.json)
  body_unicode = request.body.decode('utf-8')
  #print(body_unicode)
  body = json.loads(body_unicode)
  #print("yooooooo")
  #print(body)
  #print(body["output"])
  video = Video.objects.create(id_video=body["vid"],output=body["output"])
  video.save()
  return Response({'Outpu':True})
    