import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';







export const ProductRemove = () => {
  const deleteProduct = ({_id}) => {
    Meteor.call('products.remove', _id);
  }

  const[isAlertOpen, setIsAlertOpen] = useState (false);
 

  const OpenAlert  = () => (
    setIsAlertOpen(true)
  );

  const cancelDelete = () => (
   setIsAlertOpen(false)
  );

  return (

 <div>
   
 </div>

    
  )
  
};