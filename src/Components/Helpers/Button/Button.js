import "./Button.css";

function handleClick(e) {
  e.preventDefault();
  console.log("Clicou");
  if (e.target.className === "btn restart-btn") restartGame();
  if (e.target.className === "btn submit-btn") submitGuess();
}

function restartGame() {
  console.log("Restart");
}

function submitGuess() {
  console.log("Enviou chute");
}

const Button = ({ text, className, disabled }) => {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
