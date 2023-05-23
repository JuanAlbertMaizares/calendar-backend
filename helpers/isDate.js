const moment = require('moment');

// este helper se encarga de validar si la fecha enviada por el cliente es valida
const isDate = ( value ) => {
    if (!value) {
        return false;
    }
    const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isDate
}