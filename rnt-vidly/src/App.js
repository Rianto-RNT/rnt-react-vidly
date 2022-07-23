import React, { Component } from "react";
import Movies from "./components/movies";
class App extends Component {
  render() {
    return (
      <main className="container pt-7">
      <Movies/>
      </main>
    );
  }
}

export default App;
