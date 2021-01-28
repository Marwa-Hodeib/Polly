import React, { Fragment, useEffect, useState } from 'react';
import {useTracker} from 'meteor/react-meteor-data';
import { ProductCard } from './ProductCard';
import { ProductInfo } from './ProductInfo';
import {ProductsHeader} from './ProductsHeader';
import {getProductsService} from '../../../Services';



export const Products = (props) => {

  const [dialogOpen, setDialogOpen] = useState (false);



  const toggleDialog = () =>{
    setDialogOpen(!dialogOpen)
  }


  const {products, isLoading} = useTracker(getProductsService)

  

  return (
    <Fragment>
      <ProductInfo
       isOpen={dialogOpen}
       closeDialog={toggleDialog} 
       />
        <ProductsHeader
          checked={props.checked}
          onChange={props.onChange}
          toggleDialog={toggleDialog}
        />
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
    justifyContent: "center",
    paddingTop: '100px'
  },


}



