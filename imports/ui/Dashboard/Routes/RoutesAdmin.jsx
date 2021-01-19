import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Products } from "../Pages/Products";
import {AlertMessage} from '../globalComponents/AlertMessage';
import {AlertContext} from '../Context/AlertContext';
import {Login} from '../Pages/Login';
import {useTracker} from 'meteor/react-meteor-data';





export const RoutesAdmin = () => {

const [isAlertOpen, setIsAlertOpen] = useState (false);
const [alertOptions, setAlertOptions] = useState ({});

const user = useTracker(() => Meteor.user());



const toggleMessage = () => {
  setIsAlertOpen(!isAlertOpen)
}


  const {path} = useRouteMatch()
  

  return(

    <Fragment>
      <AlertMessage
      open={isAlertOpen}
      close={toggleMessage}
      options={alertOptions}
      />
    <AlertContext.Provider value={{setAlertOptions,toggleMessage}}>
    <Router>
      <Switch>
        <Route 
          exact path={path}>
          <Login/>
        </Route>
        {user ? 
         <Route 
         exact path={`${path}/products`}>
           <Products/>
       </Route>
       :
       <></>}

       
      </Switch>
    </Router>
    </AlertContext.Provider>
    </Fragment>
  )
}