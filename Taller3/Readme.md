# Single Stage

El comandos utilizados para crear la imagen del contenedor es: <br>
docker build --tag mathiryan/prueba:SingleStage . <br>
El comando utilizado para subir la imagen a docker hub es:
docker push mathiryan/prueba:SingleStage <br>
[![1.png](https://i.postimg.cc/sf8Vks0V/1.png)](https://postimg.cc/DmrkskTD)

# Multi Stage

El comandos utilizados para crear la imagen del contenedor es: <br>
docker build --tag mathiryan/prueba:MultiStage . <br>
El comando utilizado para subir la imagen a docker hub es:
docker push mathiryan/prueba:MultiStage <br>

[![2.png](https://i.postimg.cc/YCBtS8HZ/2.png)](https://postimg.cc/vchJqrDt)

# Imagenes en Docker Hub

[![3.png](https://i.postimg.cc/cCV0wB8K/3.png)](https://postimg.cc/30CsHp17)

# Prueba de descarga de Docker Hub

El comando para descargar las imagenes es:<br>
docker container run -d -p 3000:3000  mathiryan/prueba:MultiStage<br>

[![4.png](https://i.postimg.cc/jd7sKmGy/4.png)](https://postimg.cc/WhsRwWp4)