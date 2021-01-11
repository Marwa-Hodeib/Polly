import {ProductsCollection} from '../db/ProductsCollection';
import {check} from 'meteor/check';
import {checkStringsIfNotEmpty} from '../helpers/index'



Meteor.methods({

  'products.upsert'({productId,title, description, details, price, notes}){

    if (checkStringsIfNotEmpty([title, description, details, price, notes])) {

      const response = ProductsCollection.upsert(productId, {
        $set: {
          title,
          description,
          details,
          price,
          notes
        }})
      }
  },

  'products.remove'(productId){
    check(productId, String)

    ProductsCollection.remove(productId)
  },
})