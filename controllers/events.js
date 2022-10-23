const { response } = require("express");
const Evento = require("../models/Evento");
const Usuario = require("../models/Usuario");

 

const getEventos = async(req, res = response) => {
    const eventos = await Evento.find().populate('user', 'name'); // retorna todo.
    res.json({
        ok: true,
        eventos
    })
}
// mtd: CREAR UN EVENTO 
const crearEvento = async(req, res = response) => {
    const evento = new Evento( req.body );
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save()
        res.json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: 'Hable con el admin'
        })
    }
     
}
// mtd: ACTUALIZAR UN EVENTO 
const actualizarEventos = async(req, res = response) => {
    const eventoId = req.params.id;
    try {
        const evento = await Evento.findById( eventoId );
        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existente con ese id.'
            });
        }
        // checkea que sea el mismo usuario que lo creo.
        if (evento.user.toString() !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para editar.'
            });
        }
        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});
        res.json({
            ok:true,
            evento: eventoActualizado
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin'
        })
    }
    
    
    
}
// mtd: ELIMINAR UN EVENTO 
const eliminarEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEventos '
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEventos,
    eliminarEventos,
}
 


 