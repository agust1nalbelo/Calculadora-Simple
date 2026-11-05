const express = require('express');
const cors = require('cors');
const calcRutas = require('./src/rutas/calcRutas');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', calcRutas);

app.get('/', (req, res) => {
  res.send('API de calculadora activa');
});

const PUERTO = 3000; 
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});