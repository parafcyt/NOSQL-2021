
# MONGO

    $ docker pull mongo

    $ docker run --name bd-crypto-mongo -d mongo


# AGENTE

    $ docker build -t="crypto-agente" .

    $ docker run -it --link=bd-crypto-mongo:bd-crypto-mongo crypto-agente


# API

    $ docker build -t="crypto-api" .

    $ docker run -it --link=bd-crypto-mongo:bd-crypto-mongo crypto-api

    $ docker rm $(docker ps -aq)