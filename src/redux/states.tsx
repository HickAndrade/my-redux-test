
export interface ProductState {
    id: number;
    description: string;
    value: number;
    quantity: number;
}

const initialProductState: ProductState = {
    id: 0,
    description: '',
    quantity: 0,
    value: 0
}

export default initialProductState;

