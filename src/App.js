import "./Styles/Global.css";
import Header from "./Components/Header/Header";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    // Envolve a aplicação no contexto global
    <GameProvider>
      <div className="App">
        <Header />
        <DisplayContainer />
        <FormContainer />
      </div>
    </GameProvider>
  );
}

export default App;
