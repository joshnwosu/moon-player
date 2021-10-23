import React from "react";
import ReactDOM from "react-dom";

async function clicked() {
  const result = await moonPlayer.sayHello("Hello from the renderer is here.");
  console.log(result);
}

ReactDOM.render(
  <div>
    <button onClick={clicked}>Click Me</button>
    <h1>Hello from React. Workspace branch</h1>
  </div>,
  document.getElementById("root")
);
