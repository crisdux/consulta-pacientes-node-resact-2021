const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const morgan = require('morgan')
const routes = require('./routes')
// const bodyParser = require('body-parser')
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('appName',"Consulta de pacientes".toUpperCase());

// conectar a base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', { //db
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//habilitar el body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', routes());

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName').bgYellow.black);
    console.log(`Server on port ${app.get('port')} :D`.blue.bold);
});