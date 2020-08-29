import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

function Application(props) {
  return (
    <main>
      <Button onClick={(event) => console.log("Button clicked!")}>Reset</Button>
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
