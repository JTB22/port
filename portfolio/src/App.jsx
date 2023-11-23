import { useState } from "react";
import viteLogo from "/logo1.png";
// import githubLogo from "/icons8-github.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <h1>Joshua</h1>
        <a href="https://joshblood.com" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Josh Blood" />
        </a>
        <h1>Blood</h1>
      </div>
      <div className="body">
        <div className="card"></div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
