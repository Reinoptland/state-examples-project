function PlayerForm({ name, setName, setEditmode, setAvatar, avatar }) {
  return (
    <div>
      <label>playername</label>
      <input value={name} onChange={(event) => setName(event.target.value)} />
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
  );
}

export default PlayerForm;
