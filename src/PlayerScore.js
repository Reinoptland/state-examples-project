function PlayerScore({ avatar, name, score, setScore, setEditmode, editMode }) {
  return (
    <div>
      {avatar} - {name}: {score}
      {score === 10 && <p>Jij bent de winnaar</p>}
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
      <button onClick={() => setEditmode(!editMode)}>✍️</button>
    </div>
  );
}

export default PlayerScore;
