from rest_framework import serializers
from .models import Usuario, Empresa, Interes, Match, Categoria, Subcategoria

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'id', 'nombre', 'apellido', 'correo_electronico', 'contrasena', 
            'genero', 'foto_perfil', 'direccion', 'telefono', 'pais', 'ciudad', 
            'fecha_nacimiento', 'numero_identificacion', 'tipo_rol', 'empresa', 
            'ultima_conexion', 'fecha_creacion', 'activo', 'notificaciones'
        ]
        extra_kwargs = {
            'contrasena': {'write_only': True}  # Para no enviar la contraseña en las respuestas
        }

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = [
            'id', 'nombre_legal', 'numero_registro', 'tipo_empresa', 
            'direccion_fiscal', 'telefono_contacto', 'correo_contacto', 
            'pagina_web', 'fecha_creacion', 'descripcion', 'tags'
        ]

class InteresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interes
        fields = ['id', 'nombre', 'descripcion', 'usuario']

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = [
            'id', 'usuario', 'usuario_2', 'fecha_match', 
            'categoria', 'etapa', 'asunto', 'descripcion'
        ]

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion', 'subcategoria']

class SubcategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategoria
        fields = ['id', 'nombre', 'descripcion']
