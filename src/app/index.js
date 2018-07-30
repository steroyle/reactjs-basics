import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <Header/>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
