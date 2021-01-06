# cursos_universitarios

Proyecto en Django para entrevista de trabajo. Construccion de Rest API con DRF para un sistema de administracion de cursos universitarios. 

Requisitos

- Python 3
- Docker

Build

- Copiar repositorio en directorio seleccionado y CD al mismo

https://github.com/rjnocelli/cursos_universitarios.git

- Comando para construir la imagen de Docker:

docker build -t cursos_universitarios -f Dockerfile .

- Correr la imagen de Docker puerto 8888 en puerto local 80:

docker run -it -p 80:8888 --name cursos_uni_app cursos_universitarios 

- Abrir aplicacion en localhost

http://localhost

