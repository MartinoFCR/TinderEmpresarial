from django.db import models # type: ignore

# Create your models here.
class Empresa(models.Model):
    nombre_legal = models.CharField(max_length=255)
    numero_registro = models.CharField(max_length=50)
    tipo_empresa = models.CharField(max_length=100)
    direccion_fiscal = models.CharField(max_length=255)
    telefono_contacto = models.CharField(max_length=50)
    correo_contacto = models.EmailField(max_length=255)
    pagina_web = models.URLField(max_length=255, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    descripcion = models.TextField(null=True, blank=True)
    tags = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.nombre_legal
    class Meta:
        db_table = 'Empresa'
    
class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    correo_electronico = models.EmailField(unique=True)
    contrasena = models.CharField(max_length=255)
    genero = models.CharField(max_length=50)
    foto_perfil = models.CharField(max_length=255, null=True, blank=True)
    direccion = models.CharField(max_length=255, null=True, blank=True)
    telefono = models.CharField(max_length=50, null=True, blank=True)
    pais = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    numero_identificacion = models.CharField(max_length=50, unique=True)
    tipo_rol = models.CharField(max_length=50)
    empresa = models.ForeignKey(Empresa, null=True, blank=True, on_delete=models.SET_NULL)
    ultima_conexion = models.DateTimeField(null=True, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    activo = models.BooleanField(default=True)
    notificaciones = models.BooleanField(default=True)
    
    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    class Meta:
        db_table = 'Usuario'
    

class Interes(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(max_length=500)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
    class Meta:
        db_table = 'Interes'

class Match(models.Model):
    usuario = models.ForeignKey(Usuario, related_name='usuario_1', on_delete=models.CASCADE)
    usuario_2 = models.ForeignKey(Usuario, related_name='usuario_2', on_delete=models.CASCADE)
    fecha_match = models.DateTimeField()
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE)
    etapa = models.CharField(max_length=50)
    asunto = models.CharField(max_length=255)
    descripcion = models.TextField(max_length=500)

    def __str__(self):
        return f'Match {self.usuario} y {self.usuario_2} - {self.asunto}'
    class Meta:
        db_table = 'Match'

class Categoria(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(max_length=500)
    subcategoria = models.ForeignKey('Subcategoria', on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
    class Meta:
        db_table = 'Categoria'

class Subcategoria(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(max_length=500)

    def __str__(self):
        return self.nombre
    class Meta:
        db_table = 'Subcategoria'
