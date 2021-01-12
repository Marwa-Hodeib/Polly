import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {RoutesAdmin} from '../Dashboard/Routes/RoutesAdmin';
import {Home} from '../Website/Pages/Home';


export const Routes = () => {
  

  return(
    <Router>
      <Switch>
        <Route path="/admin">
           <RoutesAdmin/>
        </Route>
        <Route  path="/">
          <Home/>
        </Route>

      </Switch>

    </Router>
  )
}