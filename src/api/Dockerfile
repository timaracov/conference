FROM python:3.10-bullseye AS conf-api

COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

COPY . ./app/

WORKDIR ./app/

CMD ["python", "run.py"]
