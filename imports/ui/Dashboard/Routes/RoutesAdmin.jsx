import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Products } from "../Pages/Products";





export const RoutesAdmin = () => {

  const {path} = useRouteMatch()

  return(

    <Router>
      <Switch>
        <Route 
          exact path={path}>
          <h1>Admin</h1>
        </Route>
        <Route 
          exact path={`${path}/products`}>
            <Products/>
        </Route>
      </Switch>
    </Router>
  )
}