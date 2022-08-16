import React, { Component } from "react";
import "./App.css";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./classComponent";

let count = 1

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          components go here<br/>
          <FunctionalComponents count={count} />
          <ClassComponent count={count} />
        </header>
      </div>
    );
  }
}
