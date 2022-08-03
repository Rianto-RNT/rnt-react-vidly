import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Custumers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Custumers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
