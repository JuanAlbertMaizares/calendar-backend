/**
    Rutas de Usuario - Auth
    host + /api/auth
 */

const {Router} = require('express');
const {check} = require('express-validator');
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
// mtd: POST . save a user.
router.post(
    '/new', 
    [   // middlewares para validacion
        check('name', 'El name es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es minimo de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario);
// mtd: POST . save a user.
router.get(
    '/renew', 
    
    revalidarToken);
// mtd: POST . save a user.
router.post(
    '/', 
    [    
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es minimo de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    loginUsuario);

module.exports = router;