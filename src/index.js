import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

function Application(props) {
  const [name, setname] = useState("");
  function reset() {
    setname("");
  }
  return (
    <main>
      <input
        value={name}
        onChange={(event) => {
          setname(event.target.value);
        }}
        placeholder="Please enter your name"
      />
      {name && (
        <>
          <h1>Hello, {name}.</h1>
          <Button onClick={reset}>Reset</Button>
        </>
      )}
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
