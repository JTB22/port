import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/logo1.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <a href="https://joshblood.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Josh Blood" />
        </a>
        <h1>Josh Blood</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
