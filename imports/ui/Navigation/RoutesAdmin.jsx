import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Products } from "../Pages/Products";
import {ProductInfo} from "../Components/Products/ProductInfo";




export const RoutesAdmin = () => {
  return(
    <Router>
      <Switch>
        <Route 
          exact path="/admin">
          <h1>Admin</h1>
        </Route>
        <Route 
          exact path="/admin/products">
            <Products/>
        </Route>
      </Switch>
    </Router>
  )
}