const { response } = require("express");



const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    })
}
const crearEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearEvento'
    })
}
const actualizarEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEventos'
    })
}
const eliminarEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEventos '
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEventos,
    eliminarEventos,
}
 


 