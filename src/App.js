import "./Styles/Global.css";
import Header from "./Components/Header/Header";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    // ENVOLVE A APLICAÇÃO NO CONTEXTO GLOBAL
    <GameProvider>
      <div className="App">
      {/* // COMPONENTES PRINCIPAIS */}
        <Header />
        <DisplayContainer />
        <FormContainer />
      </div>
    </GameProvider>
  );
}

export default App;
