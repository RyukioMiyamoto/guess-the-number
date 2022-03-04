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

  console.log(secretNumber, playerGuess);
  // VERIFICA QUAL BOTÃO FOI CLICADO E CHAMA FUNÇÃO EQUIVALENTE
  function handleClick(e) {
    e.preventDefault();
    if (e.target.className === "btn restart-btn show") resetGame();
    if (e.target.className === "btn submit-btn") checkIsValid();
  }

  function checkIsValid() {
    setError(false);
    // CHECA SE O PALPITE NÃO É NÚMERO, ESTÁ VAZIO, É MAIOR QUE 300, MENOR QUE 0, 0 OU FRACIONAL
    if (
      isNaN(playerGuess) ||
      !playerGuess ||
      playerGuess > 300 ||
      playerGuess < 0 ||
      playerGuess === 0 ||
      playerGuess % 1 !== 0
    ) {
      // CASO UMA CONDIÇÃO SEJA VERDADEIRA, EXIBE MENSAGEM PEDINDO UM NÚMERO VÁLIDO
      setNumberDisplay("🚫");
      setStatusMessage("Por favor use um número válido (1 a 300)");
      setError(true);
    } 
    // CASO CONTRÁRIO, EXECUTA A LÓGICA DE CHECAR PALPITE
    else submitGuess();
  }

  function submitGuess() {
    // CASO PALPITE SEJA MAIOR QUE O NÚMERO SECRETO
    if (playerGuess > secretNumber) {
      setStatusMessage("É menor");
    }
    // CASO PALPITE SEJA MENOR QUE O NÚMERO SECRETO
    if (playerGuess < secretNumber) {
      setStatusMessage("É maior");
    }
    // CASO PALPITE SEJA CORRETO
    if (playerGuess === secretNumber) {
      // MUDA ESTADO DO PALPITE CORRETE PARA TRUE
      setCorrectGuess(true);
      // EXIBE MENSAGEM DE VITÓRIA
      setStatusMessage("Você acertou!!!!");
      // FINALIZA O JOGO
      setGameStatus(false);
    }
    // LIMPA O CAMPO DE INPUT
    document.querySelector(".guess-input").value = "";
    // MUDA O NÚMERO EXIBIDO NO DISPLAY
    setNumberDisplay(playerGuess);
  }

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
