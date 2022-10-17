const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
// process.env.NAME_VAR

// crear app server express
const app = express();
//DB
dbConnection();

app.use(express.static('public'));
// note: Leer y obtener/parsear lo que venga en formato json.
app.use(express.json());
//note: RUTAS
app.use('/api/auth', require('./routes/auth'));

// escuchar solicitudes
app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});