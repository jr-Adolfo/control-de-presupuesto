// @flow
import React, { Fragment, useState } from "react";

export const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false)

  const agregandoPresupuesto = e =>{
      e.preventDefault();

      if(cantidad < 1 || isNaN( cantidad )){
          guardarError(true);
          return;
      }

      guardarError(false)

  }
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? 'error' : null}
      <form onSubmit={agregandoPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};
