import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import React from 'react';



export const AlertMessage = (props) => {


  return(

    <Snackbar 
        open={props.open} 
        autoHideDuration={6000} 
        onClose={props.close} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={props.close} severity={props.options.severity} variant="filled">
          {props.options.message}
        </Alert>
    </Snackbar>
  )


}
