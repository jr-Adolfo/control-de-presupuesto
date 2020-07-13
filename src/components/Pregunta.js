// @flow
import React, { Fragment, useState } from "react";
import Error from "./Error"
import PropTypes from "prop-types"

export const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  const [cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false)

  const agregandoPresupuesto = e =>{
      e.preventDefault();

      if(cantidad < 1 || isNaN( cantidad )){
          guardarError(true);
          return;
      }

      guardarError(false)

      guardarPresupuesto(cantidad)
      guardarRestante(cantidad)
      actualizarPregunta(false)

  }
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}
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
Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};
