import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

function Application(props) {
  const [name, setname] = useState("");
  return (
    <main>
      <input
        value={name}
        onChange={(event) => {
          setname(event.target.value);
        }}
        placeholder="Please enter your name"
      />
      {name && <h1>Hello, {name}.</h1>}
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
