const express = require('express');
const controladores = require('./controladores');


const enrutador = express.Router();

enrutador.get('/inicializar', controladores.iniciarBBDD);

enrutador.post('/por-rubro-en-radio', controladores.porRubroEnRadio);

enrutador.post('/dist-a-negocio', controladores.distANegocio);


module.exports = router;