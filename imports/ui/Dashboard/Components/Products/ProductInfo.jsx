import React, {useState, useEffect, Fragment} from 'react';
import { Meteor } from 'meteor/meteor';
import {Button, Dialog, TextField} from '@material-ui/core';
import {checkStringsIfNotEmpty} from '../../../../helpers/index';
import {AlertContext} from '../../Context/AlertContext';





export const ProductInfo = (props) => {


const [formData, setFormData] = useState ({
  title: "",
  description: "",
  details: "",
  price: "",
  notes: ""
})



const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)


const arrayOfRequiredInputs = [formData.title, 
  formData.description, 
  formData.details, 
  formData.price, 
  formData.notes]

const dataToAdd = {
  productId: props.product ?._id,
  ...formData
}

useEffect(()=>{
  if (props.product) {
    setFormData({
      title:props.product.title,
      description: props.product.description,
      details: props.product.details,
      price: props.product.price.toString(),
      notes: props.product.notes
    });
  }
  
},[props.editOpen,props.closeDialog])


const updateProduct = () => {
   Meteor.call( 'products.upsert',dataToAdd,(error,response)=>{
     if(response.error){
       setAlertOptions({
         severity: "warning",
         message: "SOMETHING WENT WRONG!!"
       })
     toggleMessage();
     }else{
     setAlertOptions({
       severity: "success",
       message: "YOU DID ITTTTT"
     });
     toggleMessage()
     }
   });
 setFormData({
   title: "",
   description: "",
   details: "",
   price: "",
   notes: ""
 })
  props.closeDialog(false)
}

const updateForm = (event) =>{
  const copyOfFormData = {...formData};
  copyOfFormData[event.target.name] = event.target.value;
  setFormData (copyOfFormData)

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
            name="title"
            value={formData.title} 
            label="Product Title" 
            multiline={true} 
            variant="outlined" 
            onChange={updateForm} 
            autoFocus={true}
            margin="normal"
            rows={1}
          />

          <TextField 
            name="details"
            value={formData.details} 
            label="Product Details" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateForm}
            margin="normal"
            rows={1}
          />

          <TextField 
            name="price"
            value={formData.price} 
            label="Product Price" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateForm}
            margin="normal"
            rows={1}
          />

          <TextField 
            name="notes"
            value={formData.notes} 
            label="Product Notes" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateForm}
            margin="normal"
            rows={1}
          />

          <TextField 
            name="description"
            value={formData.description} 
            label="Product Description" 
            required={true} 
            multiline={true} 
            variant="outlined" 
            onChange={updateForm}
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
