import "./Status.css";
import { useContext } from "react";
import GameContext from "../../../Context/GameContext";

const Status = () => {
  const { statusMessage, error } = useContext(GameContext);

  // CRIA A LÓGICA QUE DEFINE A CLASSE APLICADA NO DISPLAY DA MENSAGEM (NEUTRO, ERRO OU ACERTO)
  // COR NEUTRA
  let color = "status-message";
  // COR DE ERRO
  if (error) color = "status-message error";
  // COR DE ACERTO
  if (statusMessage === "Você acertou!!!!") color = "status-message correct";

  return (
    <div className="status-container">
      <h2 className={color}>{statusMessage}</h2>
    </div>
  );
};

export default Status;
