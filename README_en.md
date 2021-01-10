# cursos_universitarios

Django project for a job interview. Construction of Rest API with DRF for a university courses administration system. 

Requirements

- Python 3
- Docker

<h1> Build </h1>

* Copy and clone repository on selected directory:

  ```git clone https://github.com/rjnocelli/cursos_universitarios.git```

* CD into the proyect's directory:

  ```cd cursos_universitarios```

* Build Docker's image:

  ```docker build -t cursos_universitarios -f Dockerfile .```

* Run Docker's image 8888 on local port 80:

  ```docker run -it -p 80:8888 --name cursos_uni_app cursos_universitarios```

* Open the aplication on localhost:

  http://localhost

