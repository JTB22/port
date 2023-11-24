import { useEffect } from "react";
import viteLogo from "/logo1.png";
import githubLogo from "/icons8-github.svg";
import linkedinLogo from "/icons8-linkedin.svg";
import "./App.css";
import "animate.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function typeWriter(text, i = 0) {
  if (i < text.length) {
    document.getElementById("Welcome").textContent += text.charAt(i);
    setTimeout(() => {
      typeWriter(text, i + 1);
    }, 3000 / text.length);
  } else {
    setTimeout(() => {
      document.getElementById("Welcome").textContent += ".";
    }, 200);
    setTimeout(() => {
      document.getElementById("Welcome").textContent += ".";
    }, 500);
    setTimeout(() => {
      document.getElementById("Welcome").textContent += ".";
    }, 600);
    setTimeout(() => {
      document.getElementById("Welcome").textContent += ".";
    }, 800);
    setTimeout(() => {
      document.getElementById("Welcome").textContent = "Hello World";
      console.log("Hello World");
    }, 1100);
  }
}

function App() {
  const welcomeMessage = 'Console.WriteLine("Hello World");';
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/Build/build.loader.js",
    dataUrl: "/Build/build.data",
    frameworkUrl: "/Build/build.framework.js",
    codeUrl: "/Build/build.wasm",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);

  useEffect(() => {
    typeWriter(welcomeMessage);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Joshua</h1>
        <a href="https://joshblood.com" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Josh Blood" />
        </a>
        <h1>Blood</h1>
      </div>
      <p id="Welcome"></p>
      <div className="body">
        <div className="card unity">
          {isLoaded === false && (
            <div className="loading-overlay">
              <p>Loading... ({loadingPercentage}%)</p>
            </div>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{ width: "80vw", maxWidth: "875px" }}
          />
        </div>
        <div className="card">
          <a href="https://github.com/jtb22" target="_blank" rel="noreferrer">
            <img
              src={githubLogo}
              className="animate__animated animate__pulse animate__infinite	infinite logo"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joshblood/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinLogo}
              className="animate__animated animate__pulse animate__infinite	infinite logo"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className="footer">
        <p>
          © 2023 Joshua Blood. All rights reserved. Social icons by{" "}
          <a href="https://icons8.com" target="_blank" rel="noreferrer">
            Icons8
          </a>
          . Isometric Nature assets by{" "}
          <a href="https://kenney.nl/" target="_blank" rel="noreferrer">
            Kenney
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
