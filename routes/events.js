/*
    Events Routes
    /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getEventos, crearEvento, actualizarEventos, eliminarEventos } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const {validarJWT} = require('../middlewares/validar-jwt');

const router = Router();
// definimos un middle para todos.
// se aplicara a todos los elementos definimos en router.
router.use( validarJWT );

router.get('/', getEventos );
router.post('/', 
    [
        check('title', 'Title es obligatorio.').not().isEmpty(),
        check('notes', 'Note es obligatorio.').not().isEmpty(),
        check('start', 'Start es obligatorio.').custom( isDate ),
        check('end', 'End es obligatorio.').custom( isDate ),
        validarCampos
    ],
    crearEvento );
router.put('/:id', actualizarEventos );
router.delete('/:id', eliminarEventos );

module.exports = router;