var express = require("express");
var app= express();

app.get('/', (req,res)=>{

    var items = [
        {name:'node.js',url:'https://nodejs.org/en/'},
        {name:'ejs',url:'https://ejs.co'},
        {name:'expressjs',url:'https://expressjs.com'},
    ];
    var isAdmin=false;
    res.render("pages/admin", {title:'admin', items, isAdmin});
})
app.get('/altas', (req,res)=>{
    res.send("Bienvenido a altas admin");
})
app.get('/bajas', (req,res)=>{
    res.send("Bienvenido a bajas admin");
})

module.exports = app;