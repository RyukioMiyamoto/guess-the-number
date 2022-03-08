import "./FormContainer.css";
import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Button from "../Helpers/Button/Button";
import Input from "../Helpers/Input/Input";
import { GuessProvider } from "../../Context/GuessContext";

const FormContainer = () => {
  const { gameStatus } = useContext(GameContext);
  return (
    // Envolve o componente no contexto do palpite
    <GuessProvider>
      <form className="form-container">
        <Input
          // Exibe o placeholder conforme estado do jogo
          placeholder={!gameStatus ? "" : "Digite o palpite"}
          // Trava o teclado no formato numérico para usuários mobile
          type="tel"
          inputMode="numeric"
          className="guess-input"
          // Checa estado do jogo e passa o valor booleano contrário a ele como props
          // definindo se está disabled ou não 
          disabled={!gameStatus}
        />
        {/* Habilita e desabilita botão de enviar conforme estado do jogo seguindo mesma lógica do input */}
        <Button
          className="btn submit-btn"
          text="Enviar"
          disabled={!gameStatus}
        />
      </form>
    </GuessProvider>
  );
};

export default FormContainer;
