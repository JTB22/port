import { Component } from "react";
import viteLogo from "/logo1.png";
// import githubLogo from "/icons8-github.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      firstName: "Joshua",
      lastName: "Blood",
      typeWriter: function (text, i = 0) {
        if (i < text.length) {
          const newText = document.getElementById(text).textContent.split("");
          newText[i] = text.charAt(i);
          document.getElementById(text).textContent = newText.join("");
          setTimeout(() => {
            this.typeWriter(text, i + 1);
          }, 1300 / text.length);
        }
      },
    };
  }

  componentDidMount() {
    this.state.typeWriter("Joshua");
    setTimeout(() => {
      this.state.typeWriter("Blood");
    }, 1300);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 id={this.state.firstName}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
          <a href="https://joshblood.com" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Josh Blood" />
          </a>
          <h1 id={this.state.lastName}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
        <div className="body">
          <div className="card"></div>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    );
  }
}

export default App;
