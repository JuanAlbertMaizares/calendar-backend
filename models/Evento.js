// def un un modelo, con propiedades y lo exportamos.
const {Schema, model} = require('mongoose');

const EventoSchema = Schema({
    title: {
        type:String,
        require: true
    },
    notes: {
        type:String, 
    },
    start: {
        type:Date,
        require: true
    },
    end: {
        type:Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
     
});
// para exportar def con:
// 1_ un string de como este modelo se exportara, con que nombre se exportara.
// 2_ el nombre de la clase 
module.exports = model('Evento', EventoSchema ); 