from django.urls import path
from .views import (
    TaskCreateView,
    TaskListView,
    TaskUpdateView,
    TaskDeleteView
)

urlpatterns = [
    path('', TaskListView.as_view()),
    path('create/', TaskCreateView.as_view()),
    path('<int:pk>/update/', TaskUpdateView.as_view()),
    path('<int:pk>/delete/', TaskDeleteView.as_view()),
]
