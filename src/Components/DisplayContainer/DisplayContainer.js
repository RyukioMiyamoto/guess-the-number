import "./DisplayContainer.css";
import Status from "./Status/Status";
import Numbers from "./NumbersContainer/NumbersContainer";
import Button from "../Helpers/Button/Button";
import { useContext } from "react";
import GameContext from "../../Context/GameContext";

const DisplayContainer = () => {
  const { gameStatus } = useContext(GameContext);
  // Cria a lógica que define se botão de reiniciar está visível
  const displayButton = gameStatus ? "btn restart-btn" : "btn restart-btn show";

  return (
    <div className="display-container">
      {/* Exibe uma mensagem de status */}
      <Status />
      {/* Exibe os números de palpite ou erro de requisição */}
      <Numbers />
      {/* Botão para iniciar nova partida */}
      <Button text="Nova Partida" className={displayButton} />
    </div>
  );
};

export default DisplayContainer;
