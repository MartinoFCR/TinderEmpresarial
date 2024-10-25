from django.urls import path
from .views import usuario_list, create_usuario, update_usuario, delete_usuario

urlpatterns = [
    path('usuarios/', usuario_list),
    path('usuarios/create/', create_usuario),
    path('usuarios/update/<int:pk>/', update_usuario),
    path('usuarios/delete/<int:pk>/', delete_usuario),
]


