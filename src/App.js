import "./Styles/Global.css";
import Header from "./Components/Header/Header";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
import { GameProvider } from "./Context/GameContext";
import { GuessProvider } from "./Context/GuessContext";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Provê o contexto global onde ele será consumido */}
      <GameProvider>
      {/* Provê o contexto do palpite onde ele será consumido */}
        <DisplayContainer />
        <GuessProvider>
          <FormContainer />
        </GuessProvider>
      </GameProvider>
    </div>
  );
}

export default App;
