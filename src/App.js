import "./Styles/Global.css";
import Header from "./Components/Header/Header";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
import FormContainer from "./Components/FormContainer/FormContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayContainer />
      <FormContainer />
    </div>
  );
}

export default App;
