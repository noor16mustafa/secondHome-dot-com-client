import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);
    console.log(products);
    return (
        <div className='text-center my-14'>
            <h2 className="text-4xl font-bold text-success">Choose Your's one</h2>
            <div className='grid justify-items-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;