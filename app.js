// # Dependencias
var config = require("./config");
var express = require("express");
var morgan = require("morgan");

var index = require("./routes/index");
var admin = require("./routes/admin");
var api = require("./routes/api");

// # Incializar express
var app = express();

// # Inicializar midleware de morgan
app.use(morgan('dev'));

// # Inicializar motor de plantilla
app.set('view engine', 'ejs')
app.use(express.static('public'))

// # Preparar servidor para leer datos de formulario
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', index);
app.use('/admin', admin);
app.use('/api', api);

app.listen(config.app.port, ()=>{
    console.log(`server running on port ${config.app.port}`);
})