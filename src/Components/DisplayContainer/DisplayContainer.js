import Status from "./Status/Status";
import Numbers from "./NumbersContainer/NumbersContainer";
import Button from "../Helpers/Button/Button";
import "./DisplayContainer.css";

const DisplayContainer = () => {
  return (
    <div className="display-container">
      <Status />
      <Numbers />
      <Button text="Nova Partida" className="btn restart-btn" />
    </div>
  );
};

export default DisplayContainer;
