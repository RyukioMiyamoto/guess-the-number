import "./FormContainer.css";
import React, { useContext, useState } from "react";
import GameContext from "../../Context/GameContext";
import Button from "../Helpers/Button/Button";

const FormContainer = () => {
  const {
    setError,
    displayError,
    secretNumber,
    setStatusMessage,
    setNumberDisplay,
    winGame,
    gameStatus,
  } = useContext(GameContext);
  // Cria estado do palpite do jogador
  const [playerGuess, setPlayerGuess] = useState(0);

  // Checa se o palpite: não é um número, está vazio, é maior que 300, menor que 0, 0 ou fracional
  function checkIsValid(e) {
    e.preventDefault();
    setError(false);
    if (
      isNaN(playerGuess) ||
      !playerGuess ||
      playerGuess > 300 ||
      playerGuess < 0 ||
      playerGuess === 0 ||
      playerGuess % 1 !== 0
    ) {
      // Caso uma das condições seja verdadeira, exibe mensagem pedindo um número válido
      displayError();
    }
    // Caso contrário executa a função que compara o palpite com o número secreto
    else submitGuess();
    // Reseta o palpite
    clearInput();
  }

  // Função de limpar input do palpite
  function clearInput() {
    // Limpa o campo de input independente do palpite fornecido
    document.querySelector(".guess-input").value = "";
    // Foca no input
    document.querySelector(".guess-input").focus();
    // Limpa o palpite do jogador
    setPlayerGuess(0);
  }

  // Função de comparar o palpite
  function submitGuess() {
    // Caso palpite seja maior que o número secreto
    if (playerGuess > secretNumber) {
      setStatusMessage("É menor");
    }
    // Caso palpite seja menor que o número secreto
    if (playerGuess < secretNumber) {
      setStatusMessage("É maior");
    }
    // Caso palpite esteja correto
    if (playerGuess === secretNumber) {
      winGame();
    }

    // Atualiza o número exibido no display
    setNumberDisplay(playerGuess);
  }

  return (
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
        onClick={(e) => checkIsValid(e)}
        disabled={!gameStatus}
      />
    </form>
  );
};

export default FormContainer;
