import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../../db/ProductsCollection';
import {useTracker} from 'meteor/react-meteor-data';
import { DataGrid } from '@material-ui/data-grid';






export const Products = () => {

  const {products, isLoading} = useTracker(() => {
    const noData = {products: []}

    
    const handler = Meteor.subscribe('products');

    if (!handler.ready()) {
      return { ...noData, isLoading: true };
    }

    const products = ProductsCollection.find({}).fetch();

    return {products, isLoading: false};
  })


  // const addProduct = () => {
  //   Meteor.call('products.insert', productTitle, productDescription, productDetails);
  // }
   
 
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


    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
    
    
  )

};
