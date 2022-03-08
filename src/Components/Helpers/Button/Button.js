import "./Button.css";
import { useContext } from "react";
import GameContext from "../../../Context/GameContext";
import GuessContext from "../../../Context/GuessContext";
const Button = ({ text, className, disabled }) => {
  const {
    winGame,
    resetGame,
    displayError,
    secretNumber,
    setStatusMessage,
    setNumberDisplay,
    setError,
  } = useContext(GameContext);
  const { playerGuess } = useContext(GuessContext);
  // Verifica qual botão foi clicado e chama função equivalente
  function handleClick(e) {
    e.preventDefault();
    if (e.target.className === "btn restart-btn show") resetGame();
    if (e.target.className === "btn submit-btn") checkIsValid();
  }

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
    // Limpa o campo de input independente do palpite fornecido
    document.querySelector(".guess-input").value = "";
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
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
