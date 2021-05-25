import { useState } from "react";

function User(props) {
  // score: getter
  // setScore: setter -> functie om de score to updaten?
  // useState(0) -> state initialiseren: beginwaarde: 0
  // useState is een hook: te zien aan begint met: "use"
  const [score, setScore] = useState(0);

  return (
    <div>
      {props.username}: {score}
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
    </div>
  );
}

export default User;
