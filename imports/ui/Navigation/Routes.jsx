import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Admin} from '../Dashboard/Admin';
import {Home} from '../Website/Pages/Home';


export const Routes = () => {
  

  return(
    <Router>
      <Switch>
        <Route path="/admin">
           <Admin/>
        </Route>
        <Route  path="/">
          <Home/>
        </Route>

      </Switch>

    </Router>
  )
}