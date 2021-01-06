import {ProductsCollection} from '../db/ProductsCollection';
import {check} from 'meteor/check';
import {checkStringsIfNotEmpty} from '../helpers/index'



Meteor.methods({



  'products.insert'(title, description, details){
   
   
    if (checkStringsIfNotEmpty([title,description,details])) {

      ProductsCollection.insert({
        title,
        description,
        details,
        createdAt: new Date,
       })
      
    }
   
  },


  'products.remove'(productId){
    check(productId, String)

    ProductsCollection.remove(productId)
  },


  'products.updateProduct'({productId,title, description, details}){

    if (checkStringsIfNotEmpty([title, description, details])) {
      const test = ProductsCollection.update(productId, {
        $set: {
          title,
          description,
          details
        }})

    console.log(test)
    }
  }
})