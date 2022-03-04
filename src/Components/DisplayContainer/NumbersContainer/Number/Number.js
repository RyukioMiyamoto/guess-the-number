import "./Number.css";
import { useContext } from "react";
import GameContext from "../../../../Context/GameContext";

const Number = ({ number }) => {
  const { error, correctGuess } = useContext(GameContext);

  // O componente de número individual consiste em duas div, superior e inferior, que terão suas
  // bordas coloridas conforme estado e dígito extraidos do palpite
  return (
    <div className="number-container">
      <div        className={`display display-top ${number} ${error ? "error" : ""} ${
          correctGuess ? "correct" : ""
        }`}
      >
        {/* Aqui foram criadas 4 divs extra para adicionar o efeito de led em 7 segmentos */}
        <div className="gap top-left"></div>
        <div className="gap top-right"></div>
        <div className="gap bottom-left"></div>
        <div className="gap bottom-right"></div>
      </div>
      <div
        className={`display display-bottom ${number} ${error ? "error" : ""} ${
          correctGuess ? "correct" : ""
        }`}
      >
        {/* Aqui foram criadas 4 divs extra para adicionar o efeito de led em 7 segmentos */}
        <div className="gap top-left"></div>
        <div className="gap top-right"></div>
        <div className="gap bottom-left"></div>
        <div className="gap bottom-right"></div>
      </div>
    </div>
  );
};

export default Number;
