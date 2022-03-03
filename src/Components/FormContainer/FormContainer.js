import Button from "../Helpers/Button/Button";
import Input from "../Helpers/Input/Input";
import "./FormContainer.css";

const FormContainer = () => {
  let disabled = false;
  return (
    <form className="form-container">
      <Input
        placeholder={disabled ? "Comece uma nova partida" : "Digite o palpite"}
        type="text"
        className="guess-input"
        disabled={disabled}
      />
      <Button className="btn submit-btn" text="Enviar" disabled={disabled} />
    </form>
  );
};

export default FormContainer;
