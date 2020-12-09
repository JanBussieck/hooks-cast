import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UseImperativeHandle from "./casts/use-imperative-handle";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Übersicht</Link>
            </li>
            <li>
              <Link to="/use-imperative-handle">useImperativeHandle</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/use-imperative-handle">
            <UseImperativeHandle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
