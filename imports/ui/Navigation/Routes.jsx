import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {RoutesAdmin} from './RoutesAdmin';


export const Routes = () => {

  return(
    <Router>
      <Switch>
        <Route path="/admin">
           <RoutesAdmin/>
        </Route>
        <Route  path="/">
          <h1>Welcome</h1>
        </Route>

      </Switch>

    </Router>
  )
}