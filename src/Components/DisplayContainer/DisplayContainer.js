import "./DisplayContainer.css";
import Status from "./Status/Status";
import Numbers from "./NumbersContainer/NumbersContainer";
import Button from "../Helpers/Button/Button";
import { useContext } from "react";
import GameContext from "../../Context/GameContext";

const DisplayContainer = () => {
  const { gameStatus } = useContext(GameContext);

  return (
    <div className="display-container">
      {/* Exibe uma mensagem de status */}
      <Status />
      {/* Exibe os números de palpite ou erro de requisição */}
      <Numbers />
      {/* Botão para iniciar nova partida */}
      <Button
        type="button"
        text="Nova Partida"
        className={`btn restart-btn ${!gameStatus && "show"}`}
        onClick="resetGame"
      />
    </div>
  );
};

export default DisplayContainer;
