#!/usr/bin/sh

cp .env ./src/api/.env
cp .env ./src/frontend/.env

cd ./src/api/
./build.sh

cd ../../

cd ./src/frontend/
./build.sh

docker-compose up --build -d
