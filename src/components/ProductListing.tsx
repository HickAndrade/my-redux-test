import React from 'react';
import { ProductState } from '../redux/states';
import { getProductById } from '../redux/operators/getProductById';
import { useSelector, useDispatch } from 'react-redux';


const ProductListing = () : JSX.Element => {
const dispatch = useDispatch();
const product: ProductState = useSelector((state: any) => state.products);


    const testingFunction = () => {
        console.log(product)
        dispatch(getProductById(1));
    }

   return( 
   <div>
        <h1 style={{
        position: 'relative',
        marginTop: '100px'
       }}>{product.description ? product.description: 'teste'}</h1>

       <button 
       style={{
        position: 'relative',
        marginTop: '100px'
       }}
       onClick={testingFunction}>{product.description}</button>
    </div>
    )
}

export default ProductListing;