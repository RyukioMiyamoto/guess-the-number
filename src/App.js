import "./Styles/Global.css";
import Header from "./Components/Header/Header";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Provê o contexto global onde ele será consumido */}
      <GameProvider>
        <DisplayContainer />
        <FormContainer />
      </GameProvider>
    </div>
  );
}

export default App;
