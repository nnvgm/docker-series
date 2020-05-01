# Install Docker

### MacOS

Access [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/) and Install Docker Desktop for Mac

### Windows

Access [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/) and Install Docker Desktop for Window

### Linux

Access [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/) and Install Docker for Linux

### Example Install For Linux

```bash
# update apt
$ sudo apt update
# install docker
$ sudo apt install docker.io -y
# add user to group docker
$ sudo usermod -aG docker $USER
```

### Verify Install Docker

```bash
$ docker info
```
