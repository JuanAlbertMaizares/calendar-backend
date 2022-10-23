// def un un modelo, con propiedades y lo exportamos.
const {Schema, model} = require('mongoose');

const EventoSchema = Schema({
    title: {
        type:String,
        required: true
    },
    notes: {
        type:String, 
    },
    start: {
        type:Date,
        required: true
    },
    end: {
        type:Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
     
});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
// para exportar def con:
// 1_ un string de como este modelo se exportara, con que nombre se exportara.
// 2_ el nombre de la clase 
module.exports = model('Evento', EventoSchema ); 