import * as productAction from '../actionCreators';

const getProductById = (productId: number): any => {
    return async (dispatch: any) => {
        dispatch(productAction.setProducts('First Test'));
    }
}

export { getProductById };