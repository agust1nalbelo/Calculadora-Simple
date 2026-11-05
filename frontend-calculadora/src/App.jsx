import { useState } from 'react';
import './App.css';

function App() {
  // Estados para capturar los inputs y el resultado
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacionTexto, setOperacionTexto] = useState('');

  // Función que conecta con el backend de Node
  const ejecutarOperacion = async (operador) => {
    if (numero1 === '' || numero2 === '') {
      alert('Ingresá ambos números');
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:3000/api/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero1: Number(numero1),
          operador: operador,
          numero2: Number(numero2)
        })
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        setResultado(datos.resultado);
        setOperacionTexto(datos.operacion);
      } else {
        alert(datos.error || 'Error al procesar el cálculo');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('No se pudo conectar con el backend. Asegurate de que esté corriendo en el puerto 3000.');
    }
  };

  return (
    <div className="contenedor-calculadora">
      <h2>Calculadora Fullstack</h2>

      <div className="entradas">
        <input
          type="number"
          placeholder="Primer número"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Segundo número"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>

      <div className="botones-operaciones">
        <button onClick={() => ejecutarOperacion('+')}>+</button>
        <button onClick={() => ejecutarOperacion('-')}>-</button>
        <button onClick={() => ejecutarOperacion('*')}>×</button>
        <button onClick={() => ejecutarOperacion('/')}>÷</button>
      </div>

      <div className="resultado-pantalla">
        <h3>Resultado:</h3>
        <p>{resultado !== null ? `${operacionTexto} = ${resultado}` : '---'}</p>
      </div>
    </div>
  );
}

export default App;