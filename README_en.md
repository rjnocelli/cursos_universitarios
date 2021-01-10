# cursos_universitarios

University courses administration system built in Django and Angular. API built in DRF plus UI in Angular. Database already populated with instances of "Alumnos" and "Cursos" in order to facilitate testing.

Requirements

- Python 3
- Angular
- Docker

<h1> Build </h1>

* Copy and clone repository on selected directory:

  ```git clone https://github.com/rjnocelli/cursos_universitarios.git```

* CD into the proyect's directory:

  ```cd cursos_universitarios```

* Build Docker's images:

  ```docker-compose build```

* Run Docker's images:

  ```docker-compose up```

* Open API on http://localhost:8080 and Angular UI on http://localhost:8888

* Drop servers 

  ```CTRL + C``` ```docker-compose down```
