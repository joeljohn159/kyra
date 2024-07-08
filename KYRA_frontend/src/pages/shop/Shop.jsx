import classes from './Shop.module.css';
import { getProducts } from '../../services/auth';
import { useState } from 'react';

export default function Shop(){

    const [products, setProducts] = useState();

    async function  handleMyProducts(){
        const token = await getProducts();
        setProducts(token.data);
        console.log(token);
    }

    return (
        <>
            <h1 className={classes.text}>I am Shop Page</h1>

            <button onClick={handleMyProducts}>My Products</button>

            {products ? <p>{products}</p> : <p>No Token</p> }
        </>
    );
}





