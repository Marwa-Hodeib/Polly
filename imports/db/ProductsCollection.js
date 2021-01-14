import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

 export const ProductsCollection = new Mongo.Collection('products');


ProductsCollection.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 30
  },
  description:{
    type: String,
  },

  details:{
    type: String,
    max: 1000
  },

  price:{
    type: Number
  },

  notes:{
    type: String,
    max: 1000
  }
}));



