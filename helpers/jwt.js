const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        // PAYLOAD - SECRET - {OPCIONES} - CALLBACK
        jwt.sign( 
            payload, 
            process.env.SECRET_JWT_SEED, 
            {   // OPCIONES, tiempo de duracion
                expiresIn:'2h'
            }, 
            // cuadno ya se firme se llama al callback
            // callback sobre que hace con reject o resolve
            ( err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                }
                resolve( token );
            }
        )
    })
}
module.exports = {
    generarJWT
}