function PlayerScore({ avatar, name, score, setScore, setEditmode, editMode }) {
  //   function increment() {
  //     if (name === "Rein") {
  //       setScore(score + 10);
  //     } else {
  //       setScore(score + 1);
  //     }
  //   }

  function changeScore(number) {
    setScore(score + number);
  }

  return (
    <div>
      {avatar} - {name}: {score}
      {score >= 10 && <p>Jij bent de winnaar</p>}
      <button onClick={() => changeScore(1)}>+</button>
      <button onClick={() => changeScore(-1)}>-</button>
      <button onClick={() => changeScore(5)}>BONUS!!!</button>
      <button onClick={() => setEditmode(!editMode)}>✍️</button>
    </div>
  );
}

export default PlayerScore;
