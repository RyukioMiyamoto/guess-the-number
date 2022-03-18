import "./Status.css";
import { useContext } from "react";
import GameContext from "../../../Context/GameContext";

const Status = () => {
  const { statusMessage, error, correctGuess } = useContext(GameContext);

  return (
    <div className="status-container">
      <h2
        // Muda a cor da mensagem dinâmicamente, conforme erro ou acerto
        className={`status-message ${error && "error"}
         ${correctGuess && "correct"}`}
      >
        {statusMessage}
      </h2>
    </div>
  );
};

export default Status;
