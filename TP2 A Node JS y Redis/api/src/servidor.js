const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

//IMPORTO RUTAS
const rutas = require('./rutas');


//SERVIDOR CON EXPRESS
const app = express();

app.listen(3000, () => {
    console.log('escuchando');
});


//MIDDLEWARES, se ejecutan al principio cada vez que se hace una peticion.
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' })); //donde ejecuto angular,no lo uso mas cuando esta en produccion

// rutas
app.use('/api', rutas);

//CONEXION A REDIS BBDD
//const redis = require('redis');
//const clienteRedis = redis.createClient(6379, 'redis-contenedor');



// app.get('/', (req, res) => {
//     res.send('hola mona!!');
// });

// clienteRedis.on("connect", () => {
//     console.log('Conectado a redis');
// });

//