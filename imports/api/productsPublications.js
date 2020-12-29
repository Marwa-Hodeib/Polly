import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '../db/ProductsCollection';


Meteor.publish('products', function publishProductss() {
  return ProductsCollection.find({});
});