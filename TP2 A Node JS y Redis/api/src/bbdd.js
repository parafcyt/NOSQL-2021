//consumo redis
const redis = require('redis');


//FUNCION PARA CONECTARME A REDIS Y QUE SE EJECUTE, Y exporto para que otros archivos lo puedan usar
module.exports = () => {

    const clienteRedis = redis.createClient(6379, 'redis-contenedor');

    //escucho eventos: error y connect
    clienteRedis.on("error", () => {
        process.exit();
    });

    clienteRedis.on("connect", () => {
        console.log('Conectado a redis');
    });

    return clienteRedis; //para usarlo afuera

}