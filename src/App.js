import React from 'react';
import { Pregunta } from './components/Pregunta';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Mensual</h1>

        <div className="contenido-principal cotenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
