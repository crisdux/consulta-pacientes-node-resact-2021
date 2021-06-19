const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const morgan = require('morgan')
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('appName',"Consulta de pacientes".toUpperCase());

// conectar a base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName').bgYellow.black);
    console.log(`Server on port ${app.get('port')} :D`.blue.bold);
});