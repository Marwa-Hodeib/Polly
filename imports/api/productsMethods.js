import {ProductsCollection} from '../db/ProductsCollection';
import {check} from 'meteor/check';

const checkUserRole = (user, role) => {
  if (!Roles.userIsInRole(user, role)) 
      throw new Meteor.Error("WTF YOU DOING");
}


Meteor.methods({

  'products.upsert'({productId,title, description, details, price, notes}){
    const user = Meteor.user();
    checkUserRole(user,'admin')
      return ProductsCollection.upsert(productId, {
      $set: {
        title,
        description,
        details,
        price,
        notes
      }})
  },

  
  'products.remove'(productId){
    check(productId, String)
    const user = Meteor.user();
    checkUserRole(user,'admin')
    const result =  ProductsCollection.remove(productId)
    if(!result) throw new Meteor.Error(404,"product not found"); 
  },
    
})