import React from "react";

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => console.log(gasto))}
  </div>
);

export default Listado;
