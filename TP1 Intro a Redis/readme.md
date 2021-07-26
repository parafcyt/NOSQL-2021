# Instalar Docker
<https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es>

1. **Actualizar paquetes:** 
    > $ sudo apt update
2. > $ sudo apt install apt-transport-https ca-certificates curl software-properties-common
3. > $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

4. > $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

5. **Actualizar paquetes:** 
    > $ sudo apt update

6. > $ apt-cache policy docker-ce

7. **Instalar Docker:** 
    > $ sudo apt install docker-ce

8. **Comprobar que funciona:** 
    > $ sudo systemctl status docker

9. **Docker sin sudo:** 
    - > $ sudo usermod -aG docker ${USER}
    - > $ su - ${USER}
    - > $ id -nG

# Comandos básicos Docker:
- **Ver todos los subcomandos disponibles:** 
    > $ docker

- **Información sobre Docker relacionada con el sistema:** 
    > $ docker info

- **Ver imágenes descargadas:** 
    > $ docker images

- **Buscar imágenes disponibles en Docker Hub:** 
    > $ docker search *<*imagen*>*

- **Descargar imágenes disponibles en Docker Hub:** 
    > $ docker pull *<*imagen*>*

- **Crear y correr imágenes:** 
    > $ docker run *<*imagen*>*
    - **-it:** da acceso a la consola del contenedor

- **Ver contenedores activos:** 
    > $ docker ps
    - **-a:** lista activos e inactivos
    - **-l:** para ver el último creado

- **Detener contenedor:** 
    > $ docker stop *<*id*>*

- **Iniciar contenedor detenido:** 
    > $ docker start *<*id/nombre*>*

- **Eliminar contenedor:** 
    > $ docker rm *<*id/nombre*>*


# Montar el contenedor de Redis en Docker

**Crear y levantar:** 
> $ docker run --name *lepongonombre* -d redis

**Sólo levantar:** 
> $ docker start *<*id/nombre*>*

**Entrar al cli:** 
> $ docker exec -it *nombre* redis-cli




