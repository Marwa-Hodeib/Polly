import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import {AlertContext} from '../../Context/AlertContext';








export const ProductRemove = (props) => {

  const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)
  
  const deleteProduct = () => {
    Meteor.call('products.remove', props._id,(error, response)=>{
      if (response.error) {
        setAlertOptionsO({
          severity: "warning",
          message: "WHAT THE FUCK DID YOU DO??!!"
        })
        toggleMessage()
       
      }else{
        setAlertOptions({
          severity: "success",
          message: "BRAVOOOOOO!!!"
        })
        toggleMessage() 
      }
    });
    props.onClose()
  }


 
  const cancelDelete = () => (
    props.onClose()
  );

  return (

 <div>
   <Dialog 
    open={props.open}
    onClose={props.onClose}
   >
   <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete product"}</DialogTitle>
   <DialogActions>
          <Button onClick={deleteProduct} color="primary">
            Delete
          </Button>
          <Button onClick={cancelDelete} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
   </Dialog>
 </div>

    
  )
  
};