// def un un modelo, con propiedades y lo exportamos.
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
     
});
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
// para exportar def con:
// 1_ un string de como este modelo se exportara, con que nombre se exportara.
// 2_ el nombre de la clase 
module.exports = model('Usuario', UsuarioSchema ); 