//IMPORTO CONEXION BBDD
const conexionRedis = require('./bbdd');

//INSTANCIO LA CONEXION A BBDD
const db = conexionRedis();

//CONTROLADOR DE PRUEBA
exports.prueba = (req, res) => {
    res.send('prueba OK');
}


//FUNCION PARA AGREGAR PERSONAJES A UN EPISODIO

exports.agregarPersonaje = (req, res) => {
    const episodio = req.params.episodio;
    const personaje = req.params.personaje;

    db.lpush(episodio, personaje, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de Redis"); //manda el Json al cliente que lo interpreta
        } else {
            res.status(200).json(`Agregado. Total de personajes en episodio ${episodio}: ${reply}`);
        }

    });

}



//FUNCION PARA QUITAR PERSONAJE DE UN EPISODIO

exports.eliminarPersonaje = (req, res) => {
    const episodio = req.params.episodio;
    const personaje = req.params.personaje;

    db.lrem(episodio, 0, personaje, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de redis");
        } else {
            res.status(200).json(`Se ha eliminado del episodio ${episodio} ${reply} personaje.`);
        }
    });
}



//FUNCION PARA LISTAR PERSONAJES DE UN EPISODIO

exports.listarPersonajes = (req, res) => {

    const episodio = req.params.episodio;

    db.lrange(episodio, 0, -1, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de redis");
        } else {
            res.status(200).json(reply);
        }
    });
}

//BORRAR LA BBDD

exports.borrarBdd = (req, res) => {
    db.flushdb((err, reply) => {
        if (err) {
            res.status(500).json("Error interno de redis");
        } else {
            res.status(200).json(reply);
        }
    });
}