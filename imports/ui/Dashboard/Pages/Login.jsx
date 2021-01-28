import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {AlertContext} from '../Context/AlertContext';
import {loginService} from '../../Services';


export const Login = () => {
  const [userName, setUserName] = useState ('');
  const [password, setPassword] = useState ('');

  const history = useHistory();

  const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)



  const submit = e => {
    e.preventDefault();
    loginService({
      userName:userName,
      password:password,
      errorHandler:()=>{
        setAlertOptions({
        severity: "warning",
        message: "Wrong Password or UserName!!"
      })
      toggleMessage()
    },
      successHandler:()=>history.push('/admin/products'),
      
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