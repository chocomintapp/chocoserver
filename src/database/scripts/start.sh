#!/bin/bash
set -e

export $(cat .development.env | xargs)

DATABASE=$DATABASE_DATABASE
PASSWORD=$DATABASE_PASSWORD
USERNAME=$DATABASE_USERNAME
PORT=$DATABASE_PORT

echo "start databse instance"
docker run --name $DATABASE -e DATABASE_PASSWORD=$PASSWORD \
    -e PGPASSWORD=$PASSWORD \
    -p $PORT:$PORT \
    -d postgres

echo "sleep wait for pg-server to start"
SLEEP 3

echo "create databse"
echo "CREATE DATABASE $DATABASE ENCODING 'UTF-8';" | docker exec -i $DATABASE psql -U $USERNAME
echo "\l" | docker exec -i $DATABASE psql -U $USERNAME
