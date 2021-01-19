import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {AlertContext} from '../Context/AlertContext';


export const Login = () => {
  const [userName, setUserName] = useState ('');
  const [password, setPassword] = useState ('');

  const history = useHistory();

  const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)



  const submit = e => {
    e.preventDefault();
    Meteor.loginWithPassword(userName, password, (error)=>{
      if (error) {
        setAlertOptions({
          severity: "warning",
          message: "Wrong Password or UserName!!"
        })
        toggleMessage();
      }
      else{
        history.push('/admin/products')
      }
     
    })
 
  };

  return (

    <form onSubmit={submit} className="login-form">
      <div>
      <label htmlFor="username">Username</label>
      </div>
      <div>
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUserName(e.target.value)}
      />
      </div>

      <div>
        <label htmlFor="password">Password</label>
      </div>
      <div>
      <input
        type="text"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />
      </div>

    <div>
    <button type="submit">Log In</button>
    </div>
    </form>

  )

}