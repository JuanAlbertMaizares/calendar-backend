const { response } = require('express');
const jwt = require('jsonwebtoken');


// este middleware se encarga de validar el token enviado por el cliente
const validarJWT = ( req, res = response, next ) => {
    // obtenemos el token enviado por el cliente
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: 'No hay token en headers'
        })
    }
    // intentamos revalidarlo
    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        // agregamos al request los datos del usuario porque lo vamos a necesitar en el controlador
        req.uid = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok : false,
            msg: 'Token no valido'
        });
    }
    next();
}
module.exports = {
    validarJWT
}