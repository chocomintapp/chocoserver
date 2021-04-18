#!/bin/bash
set -e

DATABASE="chocoserver_database"
PASSWORD="chocoserver_password"
USER="postgres"
PORT=5432

echo "stop & remove old docker and start new instance"
(docker kill $DATABASE || :) \
  && (docker rm $DATABASE || :) \
  && docker run --name $DATABASE -e POSTGRES_PASSWORD=$PASSWORD \
    -e PGPASSWORD=$PASSWORD \
    -p $PORT:$PORT \
    -d postgres

# wait for pg to start
echo "sleep wait for pg-server to start"
SLEEP 3

# create the db
echo "CREATE DATABASE $DATABASE ENCODING 'UTF-8';" | docker exec -i $DATABASE psql -U $USER
echo "\l" | docker exec -i $DATABASE psql -U $USER
