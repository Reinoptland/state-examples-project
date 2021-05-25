function PlayerForm(props) {
  return (
    <div>
      <label>playername</label>
      <input
        value={props.name}
        onChange={(event) => props.setName(event.target.value)}
      />
      <button onClick={() => props.setEditmode(false)}>submit</button>
      <select
        value={props.avatar}
        onChange={(event) => props.setAvatar(event.target.value)}
      >
        <option>🤪</option>
        <option>💪</option>
        <option>🥵</option>
      </select>
    </div>
  );
}

export default PlayerForm;
