## Back-end en NODEJS, ExpressJS, MongoDB (Mongo Atlas).
## Front-end CalendarAPP en REACTJS.
----------

### Para cargar las dependencias ejecutar
`yarn`
----------

### Este proyecto fue desarrolado en dos partes.

#### El front-end se desarrollo en React, junto con librerias secundarias para el diseño de la grilla del calendario. 
1. react-redux
2. Axios
3. react-router-dom
4. ... MUCHAS MAS.
#### El desarrollo local fue bajo REACT-VITE.

#### Deploy del front-end:
#### El front-end fue compilado con Vite. Los assets generados fueron agregados al directorio publico del back-end.
----------

#### Deploy del back-end:
#### La base de datos usada esta online en Mongo Atlas, un cluster de uso gratuito.
#### El codigo desarrolado esta en Heroku, con las variables de entorno subidas a Heroku como variables privadas.  

#### Si deseas probar el codigo en local, usted debe fijar sus varaibles de entorno en heroku usando las siguientes claves:

#### El puerto donde escucha
`PORT=`
#### La cadena de conexion a mongo atlas.
`DB_CNN=` 
#### La cadena secreta para usar Json web token.
`SECRET_JWT_SEED=`

#### Para el back-end se usaron:
1. "jsonwebtoken": "^8.5.1",
2. "mongoose": "^6.6.5",
3. "bcryptjs": "^2.4.3",
4. ...MUCHAS MAS.


----------


[DEPLOY Heroku - CalendarApp ](https://maizares-calendar-app-backend.herokuapp.com/)


[Documentación de la API REST]( )
