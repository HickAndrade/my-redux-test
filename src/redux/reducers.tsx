import states, { ProductState } from './states';
import * as actions from './actions';

import { ProductAction } from './actionCreators';


export default function products (state: ProductState = states, action: ProductAction ): ProductState {
    switch (action.type as actions.ProductActionType) {
        case actions.SELECTED_PRODUCT:
            return {
                ...state,
                description: action.id
            };
    
        case actions.REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                description: action.description
            };

        case actions.SET_PRODUCTS:
            return {
                ...state,
                description: action.payload
            };
            default:
                return state;
    }
}

