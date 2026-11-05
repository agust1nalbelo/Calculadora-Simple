const express = require('express');
const ruta = express.Router();
const { procesarCalculo } = require('../controllers/calculadoraControllers');

ruta.post('/calcular', procesarCalculo);

module.exports = ruta;