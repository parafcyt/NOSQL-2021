const redis = require('redis');

module.exports = () => {

    const client = redis.createClient(6379, 'redistp3');

    client.on("error", () => {
        process.exit();
    });

    client.on("connect", () => {
        console.log('Conectado a redis');
    });

    return client;
}