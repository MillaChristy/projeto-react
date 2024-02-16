import { useState } from "react";
import Botao from "../Botao";
import "./styles.css";

const Contador = () => {
  const [valor, setValor] = useState(0);

  const decrementar = () => {
    setValor((valorAnterior) => valorAnterior - 1);
  };

  const incrementar = () => {
    setValor((valorAnterior) => valorAnterior + 1);
  };

  const resetar = () => {
    setValor(0);
  };
  

  return (
    
    <div className="contador-section">
      <h1>Contador</h1>
      <div className="contador-main">
        <Botao texto="+" acao={incrementar} />
        <h2 className="contador-value">{valor}</h2>
        <Botao texto="-" acao={decrementar} />
       
      </div> 
      <div>
      <Botao texto="Limpar" acao={resetar} /></div>
    </div>
  );
};
export default Contador;
