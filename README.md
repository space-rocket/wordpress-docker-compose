# What this does
No need for VirtualBox or Vagrant!

All that is needed is the Docker [Mac](https://docs.docker.com/docker-for-mac/ "Get Started with Docker for Mac")/[Windows](https://docs.docker.com/docker-for-windows/ "Get Started with Docker for Windows") desktop client.

Installing the desktop client includes [Docker-Compose](https://docs.docker.com/compose/ "Docker Compose")

## Let do this!

To use:
`git clone https://github.com/bigbassroller/wordpress-docker-compose my-project-name && cd my-project-name`

Then:
`docker-compose up -d`

This will create a `wordpress` directory with a local copy of WordPress and `env` folder for the MariaDB. Now you will have a local hard copy of your WordPress files and database!

Helpfule commands:
### stop all containers:
`docker kill $(docker ps -q) -f`

### remove all containers:
`docker rm $(docker ps -a -q) -f`

### remove all docker images:
`docker rmi $(docker images -q) -f`
