#!/bin/bash
set -e

export $(cat .development.env | xargs)

DATABASE=$DB_DATABASE

echo "stop database"
docker kill $DATABASE || :

echo "remove database"
docker rm $DATABASE || :
