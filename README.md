# Getting Started:
No need for VirtualBox or Vagrant!

All that is needed is the Docker [Mac](https://docs.docker.com/docker-for-mac/ "Get Started with Docker for Mac")/[Windows](https://docs.docker.com/docker-for-windows/ "Get Started with Docker for Windows") desktop client.

Installing the desktop client includes [Docker-Compose](https://docs.docker.com/compose/ "Docker Compose")

## Let do this!

To use:
`git clone https://github.com/bigbassroller/wordpress-docker-compose my-project-name && cd my-project-name`

Then:
`docker-compose up -d`

Wait a moment, as it will take 30 seconds for Docker to install MariaDB and connect the WordPress container to it. 

This will create a `wordpress` directory with a local copy of WordPress and `env` folder for the MariaDB. Now you will have a local hard copy of your WordPress files and database!

## Helpful commands:
### stop all containers:
`docker kill $(docker ps -q)`

### remove all containers:
`docker rm $(docker ps -a -q)`

### remove all docker images:
`docker rmi $(docker images -q)`
