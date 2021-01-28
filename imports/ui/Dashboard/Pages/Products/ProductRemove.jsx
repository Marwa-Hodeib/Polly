import React from 'react';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import {AlertContext} from '../../Context/AlertContext';
import {deleteProductService} from '../../../Services';








export const ProductRemove = (props) => {

  const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)
  
  const deleteProduct = () => {
    deleteProductService({
      id: props._id,
      errorHandler:() => setAlertOptions({
        severity: "warning",
        message: "WHAT THE FUCK DID YOU DO??!!"
      }),
      successHandler:() => setAlertOptions({
        severity: "success",
        message: "BRAVOOOOOO!!!"
      }),

      runRegardless:toggleMessage
    })
  
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