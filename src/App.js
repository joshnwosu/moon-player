import React from 'react';
import { useDispatch } from 'react-redux';
import { logAppName } from './features/playerSlice';

async function clicked() {
  const result = await moonPlayer.sayHello('Hello from the renderer is here.');
  console.log(result);
}

export default function App() {
  const dispatch = useDispatch();

  const showAppName = () => {
    dispatch(logAppName());
  };

  return (
    <div>
      <button onClick={clicked}>Click Me</button>
      <button onClick={showAppName}>Log App Name</button>
      <h1>Hello from React. Workspace branch</h1>
    </div>
  );
}
