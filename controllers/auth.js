// se imp solo para el intelicense
const express = require('express');
const {validationResult} = require('express-validator');

const crearUsuario = (req, res=express.response)=>{
    const { name, email, password } = req.body;
    res.json({
        ok: true,
        msg: 'crear user',
        user: req.body

    })
}
const loginUsuario = (req, res=express.response)=>{
    res.json({
        ok: true,
        msg: 'login'
        
    })
}
const revalidarToken = (req, res=express.response)=>{
    console.log('servidor funka');
    res.json({
        ok: true,
        msg: 'revalidar token'
    })
}

module.exports = {
    crearUsuario, 
    revalidarToken,
    loginUsuario
}