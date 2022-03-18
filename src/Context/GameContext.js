import { createContext, useEffect, useState } from "react";

// Cria o contexto global com estados globais da aplicação
const GameContext = createContext("");

export const GameProvider = ({ children }) => {
  // Cria estado do jogo rodando
  const [gameStatus, setGameStatus] = useState(true);
  // Cria estado de Erro
  const [error, setError] = useState(false);
  // Cria estado do número secreto
  const [secretNumber, setSecretNumber] = useState(null);
  // Cria estado da mensagem de status
  const [statusMessage, setStatusMessage] = useState("");
  // Cria estado do display de número
  const [numberDisplay, setNumberDisplay] = useState(0);
  // Cria estado do palpite correto
  const [correctGuess, setCorrectGuess] = useState(false);

  // Gera um número secreto ao iniciar aplicação
  useEffect(() => {
    getNumber();
  }, []);

  // Função que gera o número secreto
  async function getNumber() {
    try {
      // Faz a requisição
      const res = await fetch(
        "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
      );
      const { value } = await res.json();
      // Caso a requisição volte não-ok, volte menor que 0 ou maior que 300
      if (!res.ok || value <= 0 || value > 300) {
        // Mostra a mensagem de erro no display
        setStatusMessage("Erro");
        // Define o número secreto como status retornado
        setSecretNumber(res.status);
        // Mostra o número do status retornado, contanto que ele volte diferente de 200
        if (res.status !== 200) setNumberDisplay(res.status);
        else setNumberDisplay(0);
        // Encerra o jogo
        setGameStatus(false);
        // Muda estado do erro
        setError(true);
        // Joga um erro para parar a função
        throw new Error(
          `${res.status !== 200 ? res.status : "?"} | Erro na requisição`
        );
      }
      // Caso requisição seja ok extrai o número retornado
      // e define o mesmo como número secreto
      setSecretNumber(value);
    } catch (err) {
      // Pega o erro jogado
      console.error(err.message);
    }
  }

  // Função de resetar estados
  function resetGame() {
    setSecretNumber(null);
    setNumberDisplay(0);
    setStatusMessage("");
    setGameStatus(true);
    setError(false);
    setCorrectGuess(false);
    getNumber();
  }

  // Função de vitória
  function winGame() {
    // Muda o estado do palpite correto para true
    setCorrectGuess(true);
    // Exibe mensagem de vitória
    setStatusMessage("Você acertou!!!!");
    // finaliza o Jogo
    setGameStatus(false);
  }

  // Função de exibir mensagem de erro
  function displayError() {
    setNumberDisplay("0");
    setStatusMessage("Por favor use um número válido ( 1 a 300 )");
    setError(true);
  }

  return (
    // Provê o contexto global da aplicação
    <GameContext.Provider
      value={{
        gameStatus,
        setGameStatus,
        getNumber,
        error,
        setError,
        secretNumber,
        setSecretNumber,
        numberDisplay,
        setNumberDisplay,
        statusMessage,
        setStatusMessage,
        correctGuess,
        setCorrectGuess,
        resetGame,
        winGame,
        displayError,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
