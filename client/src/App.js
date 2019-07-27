import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookContainer from "./components/BookContainer"
import Nav from "./components/Nav"
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={BookContainer} />
          {/* <Route exact path="/saved" component ={SavedContainer}/> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
