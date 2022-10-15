const express = require('express');
// crear app server express
const app = express();

app.get('/', (req, res)=>{
    console.log('servidor funka');
    res.json({
        ok: true
    })
});

// escuchar solicitudes
app.listen(4000, ()=>{
    console.log(`servidor corriendo en puerto ${4000}`);
});