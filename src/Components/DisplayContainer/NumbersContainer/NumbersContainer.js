import "./NumbersContainer.css";
import Number from "./Number/Number";
import { useContext } from "react";
import GameContext from "../../../Context/GameContext";

const Numbers = () => {
  const { numberDisplay } = useContext(GameContext);
  // Cria uma array de dígitos possíveis em formato string, que será passada como prop no componente de número
  const digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // Cria uma array que receberá os palpites
  let numbersArray = [];
  // Chega se o palpite é válido, caso seja, separa o mesmo em até 3 dígitos individuais
  if (numberDisplay !== null) numbersArray = numberDisplay.toString().split("");

  return (
    <div id="numbers-container">
      {/* Percorre a array que recebeu os palpites e renderiza um componente para cada número encontrado */}
      {numbersArray.map((number, i) => (
        <Number key={i} number={digits[numbersArray[i]]} />
      ))}
    </div>
  );
};

export default Numbers;
