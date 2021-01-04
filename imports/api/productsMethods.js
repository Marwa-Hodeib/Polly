import {ProductsCollection} from '../db/ProductsCollection';
import {check} from 'meteor/check';
import SimpleSchema from 'simpl-schema';
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


  'products.updateText'({productId, newText}){
    new SimpleSchema ({
      productId: {type: String},
      newText: {type: String}
    }).validate({productId, newText});

    const product = ProductsCollection.findOne({_id: productId});

    ProductsCollection.update(productId, {
      $set: {text: newText}
    });

  }


})