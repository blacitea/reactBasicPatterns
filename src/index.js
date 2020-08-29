import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  return (
    <button onClick={(event) => console.log("Button clicked!")}>
      {props.children}
    </button>
  );
}

function Application(props) {
  return (
    <main>
      <Button>Reset</Button>
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
