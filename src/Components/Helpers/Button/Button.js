import { useContext } from "react";
import GameContext from "../../../Context/GameContext";
import "./Button.css";

const Button = ({ text, className, disabled }) => {
  const {
    resetGame,
    secretNumber,
    playerGuess,
    setGameStatus,
    setStatusMessage,
    setNumberDisplay,
    setCorrectGuess,
    setError,
  } = useContext(GameContext);
  console.log(secretNumber);

  // Verifica qual botão foi clicado e chama função equivalente
  function handleClick(e) {
    e.preventDefault();
    if (e.target.className === "btn restart-btn show") resetGame();
    if (e.target.className === "btn submit-btn") checkIsValid();
  }

  function checkIsValid() {
    setError(false);
    // Checa se o palpite: não é um número, está vazio, é maior que 300, menor que 0, 0 ou fracional
    if (
      isNaN(playerGuess) ||
      !playerGuess ||
      playerGuess > 300 ||
      playerGuess < 0 ||
      playerGuess === 0 ||
      playerGuess % 1 !== 0
    ) {
      // Caso uma das condições seja verdadeira, exibe mensagem pedindo um número válido
      setNumberDisplay("0");
      setStatusMessage("Por favor use um número válido ( 1 a 300 )");
      setError(true);
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
      // Muda o estado do palpite correto para true
      setCorrectGuess(true);
      // Exibe mensagem de vitória
      setStatusMessage("Você acertou!!!!");
      // finaliza o Jogo
      setGameStatus(false);
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
