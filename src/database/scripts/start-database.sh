#!/bin/bash
set -e

export $(cat .development.env | xargs)

DATABASE=$POSTGRES_DATABASE
PASSWORD=$POSTGRES_PASSWORD
USER=$POSTGRES_USER
PORT=$POSTGRES_PORT

echo "stop & remove old docker and start new instance"
(docker kill $DATABASE || :) \
  && (docker rm $DATABASE || :) \
  && docker run --name $DATABASE -e POSTGRES_PASSWORD=$PASSWORD \
    -e PGPASSWORD=$PASSWORD \
    -p $PORT:$PORT \
    -d postgres

echo "sleep wait for pg-server to start"
SLEEP 3

echo "CREATE DATABASE $DATABASE ENCODING 'UTF-8';" | docker exec -i $DATABASE psql -U $USER
echo "\l" | docker exec -i $DATABASE psql -U $USER
