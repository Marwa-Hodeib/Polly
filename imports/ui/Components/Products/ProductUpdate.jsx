import React, {useState, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';
import {Button, Dialog, TextField} from '@material-ui/core';
import {checkStringsIfNotEmpty} from '../../../helpers/index';






export const ProductUpdate = (props) => {

const [productTitle, setProductTitle] = useState ('');
const [productDescription, setProductDescription] = useState ('');
const [productDetails, setProductDetails] = useState ('');

useEffect(()=>{
  setProductTitle(props.title);
  setProductDescription(props.description);
  setProductDetails(props.details);
},[props.editOpen])


const updateProduct = () => {
  Meteor.call( 'products.updateProduct',{productId: props._id,title: productTitle, description: productDescription, details: productDetails});
  setProductTitle('');
  setProductDescription('');
  setProductDetails('');
  props.closeDialog(false)
}

const updateProductTitle = (event) => {
  setProductTitle (event.target.value)
  
}

const updateProductDescription = (event) => {
  setProductDescription(event.target.value)

}

const updateProductDetails = (event) => {
  setProductDetails(event.target.value)
 
}


return(

    
      <Dialog fullScreen open={props.editOpen}>

        <h1>Edit Product</h1>

        <form>
          <TextField value={productTitle} label="Product Title" required={true} multiline={true} variant="outlined" onChange={updateProductTitle} autoFocus={true}/>
          <TextField value={productDescription} label="Product Description" required={true} multiline={true} variant="outlined" onChange={updateProductDescription}/>
          <TextField value={productDetails} label="Product Details" required={true} multiline={true} variant="outlined" onChange={updateProductDetails}/>

          <Button onClick={updateProduct} disabled={!checkStringsIfNotEmpty([productDescription,productDetails,productTitle])}>Save</Button>

        </form>



      </Dialog>
    

  )
}

