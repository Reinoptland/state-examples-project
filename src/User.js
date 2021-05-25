import { useState } from "react";

function User() {
  // score: getter
  // setScore: setter -> functie om de score to updaten?
  // useState(0) -> state initialiseren: beginwaarde: 0
  // useState is een hook: te zien aan begint met: "use"
  const [score, setScore] = useState(0);
  const [name, setName] = useState("Rein");
  const [avatar, setAvatar] = useState("🤪");

  return (
    <div>
      <div>
        <label>playername</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button>submit</button>
        <select
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
        >
          <option>🤪</option>
          <option>💪</option>
          <option>🥵</option>
        </select>
      </div>
      {avatar} - {name}: {score}
      {score === 10 && <p>Jij bent de winnaar</p>}
      {/* {score === 10 ? (
        <p>Jij bent de winnaar</p>
      ) : (
        <p>Jij moet beter je best doen</p>
      )} */}
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
      <button>✍️</button>
    </div>
  );
}

export default User;
