import "./Button.css";
import { useContext } from "react";
import GuessContext from "../../../Context/GuessContext";
import GameContext from "../../../Context/GameContext";

const Button = ({ text, className, disabled }) => {
  const { resetGame } = useContext(GameContext);
  const { checkIsValid } = useContext(GuessContext);

  // Verifica qual botão foi clicado e chama função equivalente
  function handleClick(e) {
    e.preventDefault();
    if (!e.target.className) return;
    e.target.className === "btn restart-btn show" && resetGame();
    e.target.className === "btn submit-btn" && checkIsValid();
  }

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
