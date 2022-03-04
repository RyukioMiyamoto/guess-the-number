import "./NumbersContainer.css";
import Number from "./Number/Number";

const Numbers = () => {
  return (
    <div className="numbers-container">
      {/* TEMPORÁRIO, CRIAR A LÓGICA VISUAL EM 7 SEGMENTOS DE CADA DÍGITO */}
      <Number />
    </div>
  );
};

export default Numbers;
