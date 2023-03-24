import * as actions from './actions';

export type ProductAction = {[key: string]: actions.ProductActionType | any };

const setProducts = (products: any): ProductAction => {
    return {
      type: actions.SET_PRODUCTS,
      payload: products,
    };
  };

function selectedProduct(product: any):ProductAction {
    return {
        type: actions.SELECTED_PRODUCT,
        payload: product
    }
}

export {
    setProducts,
    selectedProduct
}