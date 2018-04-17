#!/bin/bash

CONTAINER_NAME=be-container_DEV
ASSETS=`pwd`/fe/builds

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}

docker run \
    -d -p 3000:3000 \
    --name ${CONTAINER_NAME} \
    -e "NODE_ENV=development" \
    -v ${ASSETS}:/static/ \
    -v `pwd`:/app \
    library/node:8 /app/dev_entrypoint.sh
    