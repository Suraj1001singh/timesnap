from django.urls import path
from api import views
from .views import StudentList1,VideoCapture

urlpatterns = [
   # path('student/',views.StudentList.as_view()),
    path('student/video',StudentList1),
    path('student/video/transcribe',VideoCapture),
]