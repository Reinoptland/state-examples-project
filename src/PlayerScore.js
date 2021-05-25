function PlayerScore({ avatar, name, score, setScore, setEditmode, editMode }) {
  function increment() {
    if (name === "Rein") {
      setScore(score + 10);
    } else {
      setScore(score + 1);
    }
  }

  return (
    <div>
      {avatar} - {name}: {score}
      {score === 10 && <p>Jij bent de winnaar</p>}
      <button onClick={increment}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
      <button onClick={() => setEditmode(!editMode)}>✍️</button>
    </div>
  );
}

export default PlayerScore;
