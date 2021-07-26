//IMPORTO EXPRESS Y CONTROLADORES

const express = require('express');
const controladores = require('./controladores');

//CREO RUTAS
const rutas = express.Router();

//RUTAS

rutas.get('/', controladores.prueba);
rutas.post('/agregarpersonaje/:episodio/:personaje', controladores.agregarPersonaje);
rutas.delete('/eliminarpersonaje/:episodio/:personaje', controladores.eliminarPersonaje);
rutas.get('/listarpersonajes/:episodio', controladores.listarPersonajes);
rutas.delete('/borrarbdd', controladores.borrarBdd);

//EXPORTO RUTAS
module.exports = rutas;