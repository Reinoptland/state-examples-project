import { useState } from "react";

function User() {
  // score: getter
  // setScore: setter -> functie om de score to updaten?
  // useState(0) -> state initialiseren: beginwaarde: 0
  // useState is een hook: te zien aan begint met: "use"
  const [score, setScore] = useState(0);
  const [name, setName] = useState("Rein");
  const [avatar, setAvatar] = useState("🤪");
  const [editMode, setEditmode] = useState(false);

  // formulier laten verdwijnen
  // boolean, true of false -> conditional render
  // onClick
  // submit -> false
  // pennetje -> true

  return (
    <div>
      {editMode && (
        <div>
          <label>playername</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button onClick={() => setEditmode(false)}>submit</button>
          <select
            value={avatar}
            onChange={(event) => setAvatar(event.target.value)}
          >
            <option>🤪</option>
            <option>💪</option>
            <option>🥵</option>
          </select>
        </div>
      )}
      {avatar} - {name}: {score}
      {score === 10 && <p>Jij bent de winnaar</p>}
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
      <button onClick={() => setEditmode(!editMode)}>✍️</button>
    </div>
  );
}

export default User;
