import React from "react";

// veranderen in function i.p.v. class
class MatchInfo extends React.Component {
  // kunnen we weglaten
  constructor() {
    super();
    // initialiseer je component
  }

  // const [state, setState] = useState({ matchNumber: 3 })
  state = { matchNumber: 3 };

  // render method weglaten -> gewoon jsx returnen
  render() {
    return (
      <h1>
        Match # {this.state.matchNumber}
        <button
          onClick={() => {
            this.setState({ matchNumber: this.state.matchNumber + 1 });
          }}
        >
          +
        </button>
      </h1>
    );
  }
}

function MatchInfoEasy(props) {
  return <h1>Match # 1</h1>;
}

export default MatchInfo;
