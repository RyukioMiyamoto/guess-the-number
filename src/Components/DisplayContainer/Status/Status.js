import "./Status.css";
import { useContext } from "react";
import GameContext from "../../../Context/GameContext";

const Status = () => {
  const { statusMessage, error, secretNumber } = useContext(GameContext);

  // Muda a cor da mensagem de status dinamicamente conforme o estado (neutro, acerto ou erro)
  // Neutro
  let color = "status-message";
  // Erro
  if (error || secretNumber === 502) color = "status-message error";
  // Acerto
  if (statusMessage === "Você acertou!!!!") color = "status-message correct";

  return (
    <div className="status-container">
      <h2 className={color}>{statusMessage}</h2>
    </div>
  );
};

export default Status;
