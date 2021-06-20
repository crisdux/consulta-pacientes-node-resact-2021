const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')
// const corsOptions = require('./security/corsOptions')
const app = express();

// habilitar cors sin seguridad
app.use(cors());

//habilidar cors con seguridad
// !habilitar cors con seguridad 14:27
// const whitelist = ['http://localhost:3000']; //solo esta url tendra acceso a la infomracion de la api
// const corsOptions = {
//     origin: (origin, callback) => {
//         const existe = whitelist.some(dominio => dominio === origin);
//         if(existe) {
//             callback(null, true)
//         } else {
//             callback(new Error('No permitido por cors'))
//         }
//     }
// }

// app.use(cors(corsOptions));

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