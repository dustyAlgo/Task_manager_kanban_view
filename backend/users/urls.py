from django.urls import path
from .views import RegisterView, ProfileUpdateView, ProfileDeleteView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('profile/update/', ProfileUpdateView.as_view()),
    path('profile/delete/', ProfileDeleteView.as_view()),
]
