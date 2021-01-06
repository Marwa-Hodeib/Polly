import React, { Fragment, useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../../db/ProductsCollection';
import {useTracker} from 'meteor/react-meteor-data';
import { ProductAdd } from '../Components/Products/ProductAdd';
import { Button} from '@material-ui/core';
import { ProductCard } from '../Components/Products/ProductCard';






export const Products = () => {



  const [dialogOpen, setDialogOpen] = useState (false);
 


  const openDialog = () =>{
    setDialogOpen(true)
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
      <ProductAdd 
        dialogOpen={dialogOpen}
        closeDialog={ setDialogOpen}
      />
      <div style={styles.button}>
        <Button onClick={openDialog} color={"secondary"} style={styles.addButton} variant={"contained"} disableElevation={true}>Add Product</Button>
        </div>
    <div style={styles.productCard}>
      {products.map((product) =>{
        return(
          <ProductCard
            key={product._id}
            _id={product._id}
            title={product.title}
            description={product.description}
            details={product.details}
          />
        )
      })}
      </div>
    </Fragment>
  )
  
};


const styles = {
  productCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: "30px",
    gridRowGap: "30px"
  },

  // container:{
  //   display: "grid",

  // },

  button:{
    paddingBottom: "1%",
  }
}



