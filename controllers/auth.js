// se imp solo para el intelicense
const express = require('express');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

// mtd: Controller encargado del CREATE User
const crearUsuario = async(req, res=express.response)=>{
    const { password, email } = req.body;
    try {
        let usuario = await Usuario.findOne({email});
        if (usuario) {
            return res.status(400).json({
                ok:false,
                msg: 'E-mail ya existente.'
            });
        }
        usuario = new Usuario( req.body );
        // Encriptado
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
        // generar token
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el admin'
        });        
    }
}
// mtd: Controller encargado del READ User
const loginUsuario = async(req, res=express.response)=>{
    const { password, email } = req.body;
    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(400).json({
                ok:false,
                msg: 'Email o password son erroneos.'
            });
        }
        // validamos
        const validPassword = bcrypt.compareSync( password, usuario.password ); // retorna true o false
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o password son erroneos.'
            });
        }
        // generar token
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el admin'
        });        
    }
}
// mtd: Controller encargado del CREATE Token
const revalidarToken = async(req, res=express.response)=>{
    // toma el token actual y revalida el token por x horas mas.
    const uid = req.uid;
    const name = req.name;

    const token = await generarJWT(uid, name);

    res.json({
        ok: true, 
        token
    })
}

module.exports = {
    crearUsuario, 
    revalidarToken,
    loginUsuario
}