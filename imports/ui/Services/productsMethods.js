import { Meteor } from 'meteor/meteor';
import {ProductsCollection} from '../../db/ProductsCollection';


export const deleteProductService = ({
  id,
  errorHandler,
  successHandler,
  runRegardless
}) => {
  Meteor.call('products.remove', id, (error)=>{
    if (error) {
    errorHandler()

    }else{
      successHandler()
    }
    
    runRegardless() 
  });

}

export const upsertProductService = ({
  dataToAdd,
  errorHandler,
  successHandler,
  runRegardless
}) => {

  Meteor.call( 'products.upsert',dataToAdd,(error)=>{
    
    if(error){
      errorHandler()

    }else{
      successHandler()
    }
    runRegardless();
  });
}

export const getProductsService = () => {
  const noData = {products: []}

    
    const handler = Meteor.subscribe('products');

    if (!handler.ready()) {
      return { ...noData, isLoading: true };
    }

    const products = ProductsCollection.find({}).fetch();

    return {products, isLoading: false};
}
