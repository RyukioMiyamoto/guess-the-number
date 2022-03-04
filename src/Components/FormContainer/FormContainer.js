import { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Button from "../Helpers/Button/Button";
import Input from "../Helpers/Input/Input";
import "./FormContainer.css";

const FormContainer = () => {
  const { gameStatus } = useContext(GameContext);

  return (
    <form className="form-container">
      <Input
        // Exibe o placeholder conforme estado do jogo
        placeholder={!gameStatus ? "" : "Digite o palpite"}
        // Trava o teclado no formato numérico para usuários mobile
        type="tel"
        inputMode="numeric"
        className="guess-input"
        // Habilita e desabilita campo de palpite conforme estado do jogo
        disabled={!gameStatus}
      />
      {/* Habilita e desabilita botão de enviar conforme estado do jogo */}
      <Button className="btn submit-btn" text="Enviar" disabled={!gameStatus} />
    </form>
  );
};

export default FormContainer;
