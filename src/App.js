import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User username="Rein" />
        <User username="Maria" />
        <User username="Bernard" />
      </header>
    </div>
  );
}

export default App;
