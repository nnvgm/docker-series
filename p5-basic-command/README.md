# Basic Command

### Start one container

```bash
# syntax
$ docker run [OPTIONS] ${IMAGE_NAME}:${IMAGE_TAG} command
# start container ubuntu 18.04
$ docker run -it ubuntu:18.04 sh
# Check info OS
$ cat /etc/os-release
```

### Registry

Registry use store and distribute docker image
Public Registry [Docker Hub](https://hub.docker.com)

### OPTIONS

```bash
# interactive mode
$ docker run -it alpine sh
# volumes
$ docker run -v $(pwd)/data:/data/db mongo
# detach
$ docker run -d mongo
# port forward
$ docker run -p 27017:27017 -d mongo
# env
$ docker run -e USER=NNVGM nnvgm/hello_user
```

### Manager Container

```bash
# list all containers
$ docker ps -a
# list all containers is running
$ docker ps
# stop container is running
$ docker stop ${CONTAINER_ID}
# remove container
$ docker rm ${CONTAINER_ID}
```

### Manager Image

```bash
# list all images local
$ docker images
$ docker image ls
# remove image
$ docker rmi ${IMAGE_ID}
# pull image
$ docker pull ${IMAGE_NAME}:${IMAGE_TAG}
# inspect image
$ docker inspect ${IMAGE_ID}
# history image
$ docker history ${IMAGE_ID}
```

### Access Container

```bash
$ docker exec -it ${CONTAINER_ID} sh
```

### View Log Container

```bash
$ docker logs -f ${CONTAINER_ID}
```
