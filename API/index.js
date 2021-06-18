const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('appName',"Consulta de pacientes".toUpperCase());

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName').bgYellow.black);
    console.log(`Server on port ${app.get('port')} :D`.blue.bold);
});