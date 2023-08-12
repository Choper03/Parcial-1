import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ing() {

    const [salario, setSalario] = useState(0);
    const [aumento, setAumento] = useState(0);
    const [desceunto, setDescuento] = useState(0);
    const [final, setFinal] = useState(null);

  
    const finalizar = () => {

        const igss = salario * 0.0483 ;
        const total = salario + aumento - desceunto -igss;
        setFinal(total);
    }


  const transferirsalario = (event) => {
    const salarioX = event.target.valueAsNumber;
    setSalario(salarioX);
  };


  const transferiraumento = (event) => {
    const naumentoX = event.target.valueAsNumber;
    setAumento(naumentoX);
  };

  const transferirdescuento = (event) => {
    const descuentoX = event.target.valueAsNumber;
    setDescuento(descuentoX);
  };

  return (
    <div className="container mt-5">
      <label htmlFor="numeroInput">Ingresa el salario: </label><br />
      <input
        type="number"
        id="salario"
        value={salario}
        onChange={transferirsalario}
      />
      <br />
      <label htmlFor="numeroInput">Ingresa el aumento: </label><br />
      <input
        type="number"
        id="aumento"
        value={aumento}
        onChange={transferiraumento}
      />
      <br />
      <label htmlFor="numeroInput">Ingresa el descuento: </label><br />
      <input
        type="number"
        id="descuento"
        value={desceunto}
        onChange={transferirdescuento}
      />
      <br />
        <h3>Se hara un descuento del IGSS del 4.83%</h3>
      <button onClick={finalizar}>Calcular</button>

        <h2>Salario Final : {final}</h2>
      
    </div>
  );
}

export default ing;