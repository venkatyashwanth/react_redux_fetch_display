import React, { useEffect } from 'react';
import axios from 'axios';
import Productcomponent from './Productcomponent';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/ProductActions'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(err => console.log(err));

        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    console.log("Products: ",products);

    return (
        <div className='ui grid container'>
            <Productcomponent />
        </div>
    )
}

export default ProductListing;