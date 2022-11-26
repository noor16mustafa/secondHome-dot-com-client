import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);
    const [product, setProduct] = useState(null);

    return (
        <div>
            <div className='text-center my-14'>
                <h2 className="text-4xl font-bold text-success">Choose Your's one</h2>
                <div className='grid justify-items-center'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            setProduct={setProduct}
                            product={product}></Product>)
                    }
                </div>
            </div>
            <div>
                {product &&
                    <BookingModal
                        product={product}
                        setProduct={setProduct}></BookingModal>
                }
            </div>
        </div>
    );
};

export default Products;