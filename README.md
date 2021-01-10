# cursos_universitarios

Proyecto sencillo en Django y Angular de sistema de administracion de cursos universitarios. Construccion de Rest API con DRF mas UI en Angular. La base de datos ya viene poblada con instancias de "Alumnos" y "Cursos" con el proposito de facilitar el testeo.

Requisitos

- Python 3
- Angular
- Docker


<h1> Build </h1>

* Copiar repositorio en directorio seleccionado

  ```git clone https://github.com/rjnocelli/cursos_universitarios.git```

* CD al directorio del proyecto

  ```cd cursos_universitarios```

* Comando para construir las imagenes de Docker:

  ```docker-compose build```

* Comando para correr las imagenes de docker:

  ```docker-compose up```

* Abrir API en http://localhost:8080 y Angular UI en http://localhost:8888

* Bajar servidores

  ```CTRL + C```
  ```docker-compose down```

  

