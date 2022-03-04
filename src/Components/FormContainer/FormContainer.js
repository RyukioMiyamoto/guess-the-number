import { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Button from "../Helpers/Button/Button";
import Input from "../Helpers/Input/Input";
import "./FormContainer.css";

const FormContainer = () => {
  const { gameStatus } = useContext(GameContext);

  return (
    <form className="form-container">
      {/* EXIBE O PLACEHOLDER CONFORME ESTADO DO JOGO */}
      <Input
        placeholder={!gameStatus ? "" : "Digite o palpite"}
        type="tel"
        inputMode="numeric"
        className="guess-input"
        // HABILITA E DESABILITA CAMPO DE PALPITE CONFORME ESTADO DO JOGO
        disabled={!gameStatus}
        />
        {/* HABILITA E DESABILITA BOTÃO DE ENVIAR CONFORME ESTADO DO JOGO */}
      <Button className="btn submit-btn" text="Enviar" disabled={!gameStatus} />
    </form>
  );
};

export default FormContainer;
