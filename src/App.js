import React from "react";

async function clicked() {
  const result = await moonPlayer.sayHello("Hello from the renderer is here.");
  console.log(result);
}

export default function App() {
  return (
    <div>
      <button onClick={clicked}>Click Me</button>
      <h1>Hello from React. Workspace branch</h1>
    </div>
  );
}
