/**
    Rutas de Usuario - Auth
    host + /api/auth
 */

const {Router} = require('express');
const {check} = require('express-validator');
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();
// mtd: POST . nuevo usuario.
router.post(
    '/new', 
    [   // middlewares para validacion
        check('name', 'El name es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es minimo de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario);
// mtd: POST . revalidad token.
router.get(
    '/renew', 
    validarJWT,
    revalidarToken);
// mtd: POST . login comun.
router.post(
    '/', 
    [    
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es minimo de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    loginUsuario);

module.exports = router;