FROM python:3.6

RUN mkdir /app
WORKDIR /app

ADD . /app/

ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND=noninteractive 

ENV PORT=8080

RUN apt-get update && apt-get install -y --no-install-recommends \
        tzdata \
        python3-setuptools \
        python3-pip \
        python3-dev \
        python3-venv \
        git \
        && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


RUN pip3 install --upgrade pip 
RUN pip3 install pipenv
RUN pip3 install django-cors-headers

RUN pipenv install --skip-lock --system --dev

EXPOSE 8080
