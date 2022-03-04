import "./DisplayContainer.css";
import Status from "./Status/Status";
import Numbers from "./NumbersContainer/NumbersContainer";
import Button from "../Helpers/Button/Button";
import { useContext } from "react";
import GameContext from "../../Context/GameContext";

const DisplayContainer = () => {
  const { gameStatus } = useContext(GameContext);
  // CRIA A LÓGICA QUE DEFINE SE BOTÃO DE REINICIAR ESTÁ VISÍVEL
  const displayButton = gameStatus ? "btn restart-btn" : "btn restart-btn show";

  return (
    <div className="display-container">
      {/* EXIBE UMA MENSAGEM DE ESTADO */}
      <Status />
      {/* EXIBE OS DÍGITOS */}
      <Numbers />
      {/* BOTÃO PARA INICIAR NOVA PARTIDA EM CASO DE ERRO OU PALPITE CERTO */}
      <Button text="Nova Partida" className={displayButton} />
    </div>
  );
};

export default DisplayContainer;
