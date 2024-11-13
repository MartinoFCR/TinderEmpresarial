from django.urls import path
from .views import api_login, usuario_list, create_usuario, update_usuario, delete_usuario, empresa_list, create_empresa, update_empresa, delete_empresa

urlpatterns = [
    path('login/', api_login),
    path('usuarios/', usuario_list),
    path('usuarios/create/', create_usuario),
    path('usuarios/update/<int:pk>/', update_usuario),
    path('usuarios/delete/<int:pk>/', delete_usuario),
    path('empresas/', empresa_list),
    path('empresas/create/', create_empresa),
    path('empresas/update/<int:pk>/', update_empresa),
    path('empresas/delete/<int:pk>/', delete_empresa),
]


