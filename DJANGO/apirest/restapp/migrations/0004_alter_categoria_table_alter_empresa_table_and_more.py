# Generated by Django 5.1.2 on 2024-10-20 22:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0003_alter_empresa_correo_contacto_and_more'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='categoria',
            table='Categoria',
        ),
        migrations.AlterModelTable(
            name='empresa',
            table='Empresa',
        ),
        migrations.AlterModelTable(
            name='interes',
            table='Interes',
        ),
        migrations.AlterModelTable(
            name='match',
            table='Match',
        ),
        migrations.AlterModelTable(
            name='subcategoria',
            table='Subcategoria',
        ),
    ]
