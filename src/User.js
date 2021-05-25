import { useState } from "react";
import PlayerForm from "./PlayerForm";
import PlayerScore from "./PlayerScore";

function User() {
  // score: getter
  // setScore: setter -> functie om de score to updaten?
  // useState(0) -> state initialiseren: beginwaarde: 0
  // useState is een hook: te zien aan begint met: "use"
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("🤪");
  const [editMode, setEditmode] = useState(false);

  // formulier laten verdwijnen
  // boolean, true of false -> conditional render
  // onClick
  // submit -> false
  // pennetje -> true

  return (
    <div>
      {editMode ? (
        <PlayerForm
          name={name}
          avatar={avatar}
          setAvatar={setAvatar}
          setName={setName}
          setEditmode={setEditmode}
        />
      ) : (
        <PlayerScore
          avatar={avatar}
          name={name}
          score={score}
          editMode={editMode}
          setScore={setScore}
          setEditmode={setEditmode}
        />
      )}
    </div>
  );
}

export default User;
