from .models import Student
from django.shortcuts import render
from .serializers import StudentSerializer
from rest_framework.generics  import ListAPIView
from django.http import HttpResponse
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
import os
# Create your views here.

class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

@api_view(('GET',))
@renderer_classes((JSONRenderer,))
def StudentList1(request):
    os.system('python AutoTimeStamp.py '+request.GET['id'])
    return Response({'Status':True})
 
    