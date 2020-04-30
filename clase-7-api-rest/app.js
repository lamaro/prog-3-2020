var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');


//Conexión a la base de datos
mongoose.connect('mongodb+srv://lean:lean123@cluster0-uxjag.mongodb.net/prog3?retryWrites=true&w=majority',function(err, res){
    if(err) throw err;
    console.log('Conectedado a mi base!');
});

//Middelwares (INVESTIGAR QUE ES)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
var cors = require('cors')
app.use(cors())

routes = require('./routes/cervecerias')(app);

app.get('/', function(req, res){
    res.send("Welcome to the machine");
});

server.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en localhost:3000");
});

module.export = app;