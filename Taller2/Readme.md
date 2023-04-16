# TALLER 2

# Funcionalidades

Comando para creacion de un proyecto<br>
*docker-compose run --rm ng new proyectonuevo

Comando para creacion de un componente<br>
*docker-compose run --rm ng generate component noticia

Comando para intalacion de la libreria moment<br>
*docker-compose run --rm npm install moment

Comando para creacion de un sevicio en angular<br>
*docker-compose run --rm ng generate service noticia

Comando para creacion de un guard en angular<br>
*docker-compose run --rm ng generate guard noticia

# Cambios para el host

En caso de angular es necesario ubicar "--poll 2000" en el CMD del dockerfile

# Ejecucion
 
Se ejecuta con el comando<br>
docker-compose up -d --build server

Captura del docker corriendo
[![1.png](https://i.postimg.cc/2yy9TpxQ/1.png)](https://postimg.cc/kRryXpzG)

Captura de la aplicacion corriendo
[![2.png](https://i.postimg.cc/zDPpFcHj/2.png)](https://postimg.cc/mhCQbVwz)
