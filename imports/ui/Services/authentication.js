import { Meteor } from 'meteor/meteor';





export const loginService = ({
  userName,
  password,
  errorHandler,
  successHandler,
  runRegardless
})=>{
  Meteor.loginWithPassword(userName, password, (error)=>{
    if (error) {
      errorHandler()
    }else{
      successHandler()
    }
    runRegardless()
  })
}

export const logoutService = ({
  errorHandler,
  successHandler,
  runRegardless
}) =>{
  Meteor.logout((error) => {
    if (error) {
     errorHandler()
    
    }else{
     successHandler()
    }
    runRegardless()
  })

}

