import { useContext } from "react";
import GameContext from "../../../Context/GameContext";
import "./Input.css";

const Input = ({ placeholder, type, disabled, className, inputMode }) => {
  const { setPlayerGuess } = useContext(GameContext);

  return (
    <input
      placeholder={placeholder}
      type={type}
      inputMode={inputMode}
      className={className}
      onChange={({ target }) => setPlayerGuess(Number(target.value))}
      disabled={disabled}
    />
  );
};

export default Input;
