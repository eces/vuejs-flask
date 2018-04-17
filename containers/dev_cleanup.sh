#!/bin/bash

CONTAINER_NAME=be-container_DEV

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}
