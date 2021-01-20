import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '../db/ProductsCollection';


Meteor.publish('products', function publishProductss() {
  return ProductsCollection.find({});
});



Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
})