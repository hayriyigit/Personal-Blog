import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
          <Switch>
              <Route exact path={["/", "/blog","/blog/:id"]} component={HomePage} />
          </Switch>
    </Router>
  );
}

export default App;
