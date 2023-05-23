// este es un index version local, pq este es el usado sin tener el index deñ front-end.

const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
// process.env.NAME_VAR

// crear app server express
const app = express();
//DB
dbConnection();
// CORS
app.use(cors());
app.use(express.static('public'));
// note: Leer y obtener/parsear lo que venga en formato json.
app.use(express.json());
//note: RUTAS
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// escuchar solicitudes
app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});