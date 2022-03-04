const { createContext, useEffect, useState } = require("react");

// CRIA O CONTEXTO GLOBAL COM ESTADOS DA APLICAÇÃO
const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // JOGO RODANDO
  const [gameStatus, setGameStatus] = useState(true);
  // ERRO
  const [error, setError] = useState(false);
  // NÚMERO SECRETO
  const [secretNumber, setSecretNumber] = useState(null);
  // DISPLAY DO STATUS
  const [statusMessage, setStatusMessage] = useState("");
  // DISPLAY DO NÚMERO
  const [numberDisplay, setNumberDisplay] = useState(0);
  // PALPITE DO JOGADOR
  const [playerGuess, setPlayerGuess] = useState("");
  // PALPITE CORRETO
  const [correctGuess, setCorrectGuess] = useState(false);

  // GERA UM NÚMERO SECRETO AO INICIAR APLICAÇÃO
  useEffect(() => {
    getNumber();
  }, []);

  // FUNÇÃO QUE GERA NÚMERO SECRETO
  async function getNumber() {
    try {
      // FAZ A REQUISIÇÃO
      const res = await fetch(
        "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
      );

      // CASO A REQUISIÇÃO NÃO VOLTE OK
      if (!res.ok) {
        // MOSTRA A MENSAGEM DE ERRO NO DISPLAY
        setStatusMessage("Erro");
        // DEFINE O NÚMERO SECRETO COMO STATUS RETORNADO
        setSecretNumber(res.status);
        // MOSTRA O NÚMERO DO STATUS RETORNADO
        setNumberDisplay(res.status);
        // PARA O JOGO
        setGameStatus(false);
        // DEFINE QUE HÁ UM ERRO
        setError(true);
        // JOGA UM ERRO PARA PARAR A FUNÇÃO
        throw new Error();
      }
      // CASO REQUISIÇÃO SEJA OK EXTRAI O NÚMERO RETORNADO
      const { value } = await res.json();
      // DEFINE O NÚMERO RETORNADO COMO NÚMERO SECRETO
      setSecretNumber(value);
      console.log(value);
    } catch (err) {
      // PEGA O ERRO JOGADO
      console.error(err);
    }
  }

  // FUNÇÃO DE ZERAR ESTADOS
  function resetGame() {
    setSecretNumber(null);
    setPlayerGuess(null);
    setNumberDisplay(0);
    setStatusMessage("");
    setGameStatus(true);
    setError(false);
    setCorrectGuess(false);
    getNumber();
  }

  return (
    // CRIA O PROVIDER DE CONTEXTO PARA TODA A APLICAÇÃO
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
        playerGuess,
        setPlayerGuess,
        correctGuess,
        setCorrectGuess,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
