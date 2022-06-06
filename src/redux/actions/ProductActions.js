import { ActionTypes } from "../constants/Action-types";

const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

const selectedProducts = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeSelectedProducts = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export{setProducts,selectedProducts,removeSelectedProducts};