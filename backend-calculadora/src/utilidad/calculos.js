function calcular(numero1, operador, numero2) {
  switch (operador) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      return numero2 === 0 ? 'Error: división por cero' : numero1 / numero2;
    default:
      return 'Operador no válido';
  }
}

module.exports = { calcular };