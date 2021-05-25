import "./App.css";
import User from "./User";
import MatchInfo from "./MatchInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchInfo matchNumber={3} />
        <User />
        <User />
        <User />
      </header>
    </div>
  );
}

export default App;
