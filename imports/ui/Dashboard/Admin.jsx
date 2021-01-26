import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Products } from "./Pages/Products";
import {AlertMessage} from './globalComponents/AlertMessage';
import {AlertContext} from './Context/AlertContext';
import {Login} from './Pages/Login';
import {useTracker} from 'meteor/react-meteor-data';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';





export const Admin = () => {

const [isAlertOpen, setIsAlertOpen] = useState (false);
const [alertOptions, setAlertOptions] = useState ({});
const [darkMode, setDarkMode] = useState (true);

const user = useTracker(() => Meteor.user());

const theme = createMuiTheme({
palette:{
  type: darkMode ? "dark" : "light",
  primary: {
    main: '#049F76',
  },
  secondary:{
    main: '#e11444'
  
  },
  // background:{
  //   paper: '#14010F',
  //   default: '#ffff'
  
  
}
})

const toggleTheme = () => {
  setDarkMode(!darkMode)
}

const toggleMessage = () => {
  setIsAlertOpen(!isAlertOpen)
}


  const {path} = useRouteMatch()
  

  return(

    <Fragment>
      <ThemeProvider theme={theme}>
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
           <Products
            checked={!darkMode}
            onChange={toggleTheme}
           />
       </Route>
       :
       <></>}

       
      </Switch>
    </Router>
    </AlertContext.Provider>
    </ThemeProvider>
    </Fragment>
  )
}