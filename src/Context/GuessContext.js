import { createContext, useState } from "react";

const GuessContext = createContext("");

export const GuessProvider = ({ children }) => {
  // Cria estado do palpite do jogador
  const [playerGuess, setPlayerGuess] = useState(0);

  return (
    <GuessContext.Provider value={{ playerGuess, setPlayerGuess }}>
      {children}
    </GuessContext.Provider>
  );
};

export default GuessContext;
