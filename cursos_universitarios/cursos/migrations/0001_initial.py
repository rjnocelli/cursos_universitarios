# Generated by Django 3.1.5 on 2021-01-10 20:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alumno',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('dni', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Suscripcion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('calificacion', models.DecimalField(blank=True, decimal_places=2, max_digits=4, null=True)),
                ('fecha_de_inicio', models.DateField(blank=True, null=True)),
                ('alumno', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.alumno', verbose_name='Alumno')),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.curso', verbose_name='Curso')),
            ],
        ),
    ]
