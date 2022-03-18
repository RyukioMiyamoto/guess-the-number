import "./FormContainer.css";
import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Button from "../Helpers/Button/Button";
import GuessContext from "../../Context/GuessContext";

const FormContainer = () => {
  const { gameStatus } = useContext(GameContext);
  const { setPlayerGuess } = useContext(GuessContext);

  return (
    // Envolve o componente no contexto do palpite
      <form className="form-container">
        <label htmlFor="guess" />
        <input
          // Exibe o placeholder conforme estado do jogo
          placeholder={!gameStatus ? "" : "Digite o palpite"}
          // Trava o teclado no formato numérico para usuários mobile
          type="tel"
          inputMode="numeric"
          className="guess-input"
          // Atualiza o estado do palpite dinamicamente, conforme o mesmo é digitado no input
          onChange={({ target }) => setPlayerGuess(Number(target.value))}
          name="guess"
          id="guess"
          disabled={!gameStatus}
        />
        {/* Habilita e desabilita botão de enviar conforme estado do jogo seguindo mesma lógica do input */}
        <Button
          type="submit"
          className="btn submit-btn"
          text="Enviar"
          onClick="checkIsValid"
          disabled={!gameStatus}
        />
      </form>
  );
};

export default FormContainer;
