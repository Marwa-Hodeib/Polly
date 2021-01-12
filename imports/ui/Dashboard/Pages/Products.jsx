import React, { Fragment, useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../../../db/ProductsCollection';
import {useTracker} from 'meteor/react-meteor-data';
import { Button} from '@material-ui/core';
import { ProductCard } from '../Components/Products/ProductCard';
import { ProductInfo } from '../Components/Products/ProductInfo';






export const Products = () => {



  const [dialogOpen, setDialogOpen] = useState (false);
 


  const toggleDialog = () =>{
    setDialogOpen(!dialogOpen)
  }


  const {products, isLoading} = useTracker(() => {
    const noData = {products: []}

    
    const handler = Meteor.subscribe('products');

    if (!handler.ready()) {
      return { ...noData, isLoading: true };
    }

    const products = ProductsCollection.find({}).fetch();

    return {products, isLoading: false};
    
  })

  return (
    <Fragment>
      <ProductInfo
       isOpen={dialogOpen}
       closeDialog={toggleDialog} 
       />

      <div style={styles.button}>
        <Button 
          onClick={toggleDialog} 
          color={"secondary"} 
          style={styles.addButton} 
          variant={"contained"} 
          disableElevation={true}>
          Add Product
        </Button>
        </div>
    <div style={styles.productCard}>
      {products.map((product) =>{
        return(
          <ProductCard
            key={product._id}
            product={product}
          />
        )
      })}
      </div>
    </Fragment>
  )
  
};


const styles = {
  productCard: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center"
   
  },

 

  button:{
    paddingBottom: "1%",
  }
}


