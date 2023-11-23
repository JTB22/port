import { Component } from "react";
import viteLogo from "/logo1.png";
import githubLogo from "/icons8-github.svg";
import "./App.css";
import "animate.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      welcomeMessage: 'Console.WriteLine("Hello World");',
      lastName: "Blood",
      typeWriter: function (text, i = 0) {
        if (i < text.length) {
          document.getElementById("Welcome").textContent += text.charAt(i);
          setTimeout(() => {
            this.typeWriter(text, i + 1);
          }, 2000 / text.length);
        } else {
          setTimeout(() => {
            document.getElementById("Welcome").textContent += ".";
          }, 200);
          setTimeout(() => {
            document.getElementById("Welcome").textContent += ".";
          }, 400);
          setTimeout(() => {
            document.getElementById("Welcome").textContent += ".";
          }, 600);
          setTimeout(() => {
            document.getElementById("Welcome").textContent += ".";
          }, 800);
          setTimeout(() => {
            document.getElementById("Welcome").textContent = "Hello World";
            console.log("Hello World");
          }, 1000);
        }
      },
    };
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.state.typeWriter(this.state.welcomeMessage);
  }

  render() {
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
          <div className="card">
            <a href="https://github.com/jtb22" target="_blank" rel="noreferrer">
              <img
                src={githubLogo}
                className="animate__animated animate__pulse animate__infinite	infinite logo"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
