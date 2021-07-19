import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, GetInTouch } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/get-in-touch">
          <GetInTouch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
