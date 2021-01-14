import {ProductsCollection} from '../db/ProductsCollection';
import {check} from 'meteor/check';
import {checkStringsIfNotEmpty} from '../helpers/index'



Meteor.methods({

  'products.upsert'({productId,title, description, details, price, notes}){

    if (checkStringsIfNotEmpty([title, description, details, price, notes])) {

      try{
        return ProductsCollection.upsert(productId, {
          $set: {
            title,
            description,
            details,
            price,
            notes
          }})
        }catch(error){
          return {
            "error":"something happened"
          };
        }
      }  
      return {
        "error":"something happened"
      };

  },

  'products.remove'(productId){
    check(productId, String)

    try{
      const result =  ProductsCollection.remove(productId)
      if(result){
        return {
          "message":"successful"
        }
      }
      return {
        "error": "something happened"
      };
    }
    catch(error){
      console.log(error);
      return {
        "error": "something happened"
      };
    }
  },
})