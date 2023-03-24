import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './reducers';

const rootReducer = {
    products
}

 const store = configureStore({
    reducer: combineReducers({ ...rootReducer }),
    preloadedState: {},
    devTools: true
})

export default store;   