import { useContext, createContext, useState } from "react";
import GameContext from "./GameContext";

const GuessContext = createContext("");

export const GuessProvider = ({ children }) => {
  const {
    setError,
    displayError,
    secretNumber,
    setStatusMessage,
    setNumberDisplay,
    winGame,
  } = useContext(GameContext);
  // Cria estado do palpite do jogador
  const [playerGuess, setPlayerGuess] = useState(0);

  // Checa se o palpite: não é um número, está vazio, é maior que 300, menor que 0, 0 ou fracional
  function checkIsValid() {
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

  function clearInput() {
    // Limpa o campo de input independente do palpite fornecido
    document.querySelector(".guess-input").value = "";
    // Foca no input
    document.querySelector(".guess-input").focus();
    // Limpa o palpite do jogador
    setPlayerGuess(0);
  }

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
    <GuessContext.Provider
      value={{ playerGuess, setPlayerGuess, checkIsValid }}
    >
      {children}
    </GuessContext.Provider>
  );
};

export default GuessContext;
