/*
    Events Routes
    /api/events
*/

const { Router } = require("express");
const { getEventos, crearEvento, actualizarEventos, eliminarEventos } = require("../controllers/events");
const {validarJWT} = require('../middlewares/validar-jwt');

const router = Router();
// definimos un middle para todos.
// se aplicara a todos los elementos definimos en router.
router.use( validarJWT );

router.get('/', getEventos );
router.post('/', crearEvento );
router.put('/:id', actualizarEventos );
router.delete('/:id', eliminarEventos );

module.exports = router;