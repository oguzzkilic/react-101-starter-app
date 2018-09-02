import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from './app/components/Header';

class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
