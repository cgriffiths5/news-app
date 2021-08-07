import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Home from '../Components/Home'
import Latest from '../Components/Latest'
import '../Design/App.css'

function AppRouter() {
  return (
      <BrowserRouter>
        <nav>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/latest">Latest</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
        </Switch>


      </BrowserRouter>
  );
}

export default AppRouter;
