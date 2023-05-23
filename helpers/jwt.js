const jwt = require('jsonwebtoken');
// este helper se encarga de generar el token
const generarJWT = ( uid, name ) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        // PAYLOAD - SECRET - {OPCIONES} - CALLBACK
        // el metodo sign recibe 4 parametros
        // 1. payload: la informacion que se quiere guardar en el token
        // 2. secret: palabra secreta para firmar el token
        // 3. opciones: tiempo de duracion del token
        // 4. callback: se ejecuta cuando se firma el token
        // el callback recibe 2 parametros
        // 1. error: si no se pudo generar el token
        // 2. token: el token generado
        // el metodo sign es asincrono, por lo que se debe usar una promesa
        // para poder usar el await
        // el resolve es el return de la promesa y el reject es el throw de la promesa 
        // el reject se usa para el try catch
        // el resolve se usa para el await
        // el reject y el resolve se pueden llamar como se quiera
        jwt.sign( 
            payload, 
            process.env.SECRET_JWT_SEED, {expiresIn:'2h'}, 
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