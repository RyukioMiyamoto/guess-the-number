import "./Button.css";
import { useContext } from "react";
import GuessContext from "../../../Context/GuessContext";
import GameContext from "../../../Context/GameContext";

const Button = ({ type, text, className, onClick, disabled }) => {
  const { resetGame } = useContext(GameContext);
  const { checkIsValid } = useContext(GuessContext);

  // Verifica qual botão foi clicado e chama função equivalente
  function handleClick(e) {
    e.preventDefault();
    onClick === "checkIsValid" && checkIsValid();
    onClick === "resetGame" && resetGame();
  }

  return (
    <button type={type} className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
