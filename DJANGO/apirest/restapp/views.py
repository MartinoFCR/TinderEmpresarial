from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Empresa, Interes, Match, Categoria, Subcategoria
from .serializers import UsuarioSerializer, EmpresaSerializer, InteresSerializer, MatchSerializer, CategoriaSerializer, SubcategoriaSerializer


@api_view(['GET'])
def usuario_list(request):
    usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_usuario(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_usuario(request, pk):
    try:
        usuario = Usuario.objects.get(id=pk)
    except Usuario.DoesNotExist:
        return Response('Id de usuario no existe',status=status.HTTP_404_NOT_FOUND)
    serializer = UsuarioSerializer(instance=usuario, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_usuario(request, pk):
    try:
        usuario = Usuario.objects.get(id=pk)
    except Usuario.DoesNotExist:
        return Response('Id de usuario no existe',status=status.HTTP_404_NOT_FOUND)
    usuario.delete()
    return Response('Usuario eliminado', status=status.HTTP_204_NO_CONTENT)