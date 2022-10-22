// def un un modelo, con propiedades y lo exportamos.
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true,
        unique: true
    },
    password: {
        type:String,
        require: true
    },
     
});
// para exportar def con:
// 1_ un string de como este modelo se exportara, con que nombre se exportara.
// 2_ el nombre de la clase 
module.exports = model('Usuario', UsuarioSchema ); 