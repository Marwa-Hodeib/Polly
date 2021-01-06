import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import {Button, Dialog, TextField} from '@material-ui/core';
import {checkStringsIfNotEmpty} from '../../../helpers/index';







export const ProductAdd = (props) => {

  const [productTitle, setProductTitle] = useState ('');
  const [productDescription, setProductDescription] = useState ('');
  const [productDetails, setProductDetails] = useState ('');
  



  const addProduct = () => {
    Meteor.call('products.insert', productTitle, productDescription, productDetails);
    setProductTitle('');
    setProductDescription('');
    setProductDetails('');
    props.closeDialog(false)
  }


  const insertProductTitle = (event) => {
    setProductTitle (event.target.value)
    
  }

  const insertProductDescription = (event) => {
    setProductDescription(event.target.value)
  
  }

  const insertProductDetails = (event) => {
    setProductDetails(event.target.value)
   
  }

  
  


  return(

    
      <Dialog style={styles.container}fullScreen open={props.dialogOpen}>

      <h1 style={styles.title}>Add Product</h1>
        <form style={styles.form}>
          <TextField value={productTitle} label="Product Title" required={true} multiline={true} variant="outlined" onChange={insertProductTitle} />
          <TextField value={productDescription} label="Product Description" required={true} multiline={true} variant="outlined" onChange={insertProductDescription}/>
          <TextField value={productDetails} label="Product Details" required={true} multiline={true} variant="outlined" onChange={insertProductDetails}/>
            <Button onClick={addProduct} variant={"outlined"} size={"large"} disabled={!checkStringsIfNotEmpty([productDescription,productDetails,productTitle])}>Save</Button>

        </form>



      </Dialog>
    

  )
}

const styles = {
  form:{
    display: "flex",
    justifyContent: "space-around"
  },

  title:{
    justifySelf: "flex-end"
  },
  
}
