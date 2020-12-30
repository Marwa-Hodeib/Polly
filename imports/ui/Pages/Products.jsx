import React, { Fragment, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../../db/ProductsCollection';
import {useTracker} from 'meteor/react-meteor-data';
import { DataGrid } from '@material-ui/data-grid';
import { ProductAdd } from '../Components/Products/ProductAdd';
import { Button } from '@material-ui/core';


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

  
   
  const rows = products.map((product)=>{
     return {
       id:product._id,
       title:product.title,
       description:product.description,
       details:product.details
     }
   })
  const columns = [
    { field: 'id', headerName: 'Product Id', width: 120 },
    { field: 'title', headerName: 'Title', width: 120 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'details', headerName: 'Details', width: 120 }, 
  ];



  return (
    <Fragment>
      <ProductAdd 
        dialogOpen={dialogOpen}
        closeDialog={ setDialogOpen}
      />
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    <Button onClick={openDialog}>Add Product</Button>
    </Fragment>
  )
  
};
