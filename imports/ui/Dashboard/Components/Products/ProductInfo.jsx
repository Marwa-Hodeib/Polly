import React, {useState, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';
import {Button, Dialog, TextField} from '@material-ui/core';
import {checkStringsIfNotEmpty} from '../../../../helpers/index';





export const ProductInfo = (props) => {

const [productTitle, setProductTitle] = useState ('');
const [productDescription, setProductDescription] = useState ('');
const [productDetails, setProductDetails] = useState ('');
const [productPrice, setProductPrice] = useState ('');
const [productNotes, setProductNotes] = useState ('');

const arrayOfRequiredInputs = [productDescription,productDetails,productTitle,productPrice,productNotes]

const dataToAdd = {
  productId: props.product ?._id,
  title: productTitle, 
  description: productDescription, 
  details: productDetails,
  price: productPrice,
  notes: productNotes,
}

useEffect(()=>{
  if (props.product) {
    setProductTitle(props.product.title);
    setProductDescription(props.product.description);
    setProductDetails(props.product.details);
    setProductPrice(props.product.price || "");
    setProductNotes(props.product.notes || "");
  }
  
},[props.editOpen,props.closeDialog])


const updateProduct = () => {
  Meteor.call( 'products.upsert',dataToAdd);
  setProductTitle('');
  setProductDescription('');
  setProductDetails('');
  setProductPrice('');
  setProductNotes('');
  props.closeDialog(false)
}

const updateProductPrice = (event) => {
  setProductPrice (event.target.value)
}

const updateProductNotes = (event) => {
  setProductNotes (event.target.value)
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



const pageTitle =props.product?._id ? "Product" : "Add Product"



return(

    
      <Dialog 
      onBackdropClick={props.closeDialog} 
      onEscapeKeyDown={props.closeDialog} 
      scroll={"paper"}
      open={props.isOpen}
      >

        <h1 style={styles.title}>{pageTitle}</h1>

        <form>
          <div style={styles.container}>
          <TextField 
            value={productTitle} 
            label="Product Title" 
            multiline={true} 
            variant="outlined" 
            onChange={updateProductTitle} 
            autoFocus={true}
            margin="normal"
            rows={1}
          />

          <TextField 
            value={productDetails} 
            label="Product Details" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateProductDetails}
            margin="normal"
            rows={1}
          />

          <TextField 
            value={productPrice} 
            label="Product Price" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateProductPrice}
            margin="normal"
            rows={1}
          />

          <TextField 
            value={productNotes} 
            label="Product Notes" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateProductNotes}
            margin="normal"
            rows={1}
          />

          <TextField 
            value={productDescription} 
            label="Product Description" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateProductDescription}
            margin="normal"
            style={styles.description}
            rows={5}
          />
          </div>

          <div style={styles.buttons}>
          <Button 
            onClick={updateProduct} 
            disabled={!checkStringsIfNotEmpty(arrayOfRequiredInputs)}
            color={"secondary"}
            >Save
          </Button>
          <Button
            onClick={props.closeDialog}
            color={"primary"}
            >Cancel
          </Button>
          </div>
        </form>



      </Dialog>
    

  )

}

const styles = {
  container:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:"1rem",
    padding:"0 1rem"
  },

  title:{
    padding: "0 1rem"
  },

  buttons:{
    padding: "1rem 1rem"
  },

  description: {
    gridColumn: "1 / span 2"
  }

}
