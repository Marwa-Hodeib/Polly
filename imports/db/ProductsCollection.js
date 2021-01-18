import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

 export const ProductsCollection = new Mongo.Collection('products');


ProductsCollection.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 30,
    required: true
  },
  description:{
    type: String,
    required: true
  },

  details:{
    type: String,
    max: 1000,
    required: true
  },

  price:{
    type: Number,
    required: true
  },

  notes:{
    type: String,
    max: 1000,
    required: true
  }
}));



