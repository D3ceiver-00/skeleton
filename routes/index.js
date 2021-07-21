var express = require("express");
var app= express();

app.get('/', (req,res)=>{

    /*
    Logica para obtener el nombre de usuario BD
    */
    var user = 'D3ceiver'

    res.render('pages/home', {title:'Home2', usuario:user})
})
app.get('/altas', (req,res)=>{
    res.send("Bienvenido a altas");
    
})

module.exports = app;