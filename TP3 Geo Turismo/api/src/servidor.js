const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//SERVIDOR
const app = express();
app.set('puerto', process.env.PORT || 3000)

//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/', (req, res) => {
    res.send('hola mundo')
});


app.listen(app.get('puerto'), () => {
    console.log(`Servidor escuchando en http://localhost:${app.get('puerto')}/ `);
});