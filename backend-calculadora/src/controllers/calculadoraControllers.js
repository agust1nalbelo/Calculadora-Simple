const { calcular } = require('../utilidad/calculos');

const procesarCalculo = (req, res) => {
  try {
    const { numero1, operador, numero2 } = req.body;

    if (numero1 === undefined || !operador || numero2 === undefined) {
      return res.status(400).json({ error: 'Faltan parámetros' });
    }

    const resultado = calcular(Number(numero1), operador, Number(numero2));

    return res.json({
      operacion: `${numero1} ${operador} ${numero2}`,
      resultado: resultado
    });
  } catch (error) {
    console.error('Error interno en procesarCalculo:', error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { procesarCalculo };