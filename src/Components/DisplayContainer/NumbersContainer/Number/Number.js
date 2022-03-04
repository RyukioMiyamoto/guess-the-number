import "./Number.css";
import { useContext } from "react";
import GameContext from "../../../../Context/GameContext";

const Number = () => {
  const { numberDisplay, gameStatus, error, correctGuess } =
    useContext(GameContext);

  // CRIA A LÓGICA QUE DEFINE A CLASSE APLICADA NO DISPLAY DO NÚMERO (NEUTRO, ERRO OU ACERTO )
  // COR NEUTRA
  let color = "numbers-number";
  // COR DE ERRO
  if (error) color = "numbers-number error";
  // COR DE ACERTO
  if (correctGuess && !gameStatus) color = "numbers-number correct";

  return (
    <>
      {/* TEMPORÁRIO, CRIAR A LÓGICA VISUAL EM 7 SEGMENTOS DE CADA DÍGITO */}
      <p className={color}>{numberDisplay}</p>
    </>
  );
};

export default Number;
