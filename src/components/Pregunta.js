// @flow
import React, { Fragment, useState } from "react";

export const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form>
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
