import React, { useEffect, useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductAddForm from './ProductAddForm';

const AddProducts = () => {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [categoryName, setCategoryName] = useState(null);

    useEffect(() => {
        fetch('https://resale-market-server-seven.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    return (
        <div className='flex flex-col justify-items-center mx-auto'>
            <h2 className="text-4xl text-center text-success my-14">Add A Product</h2>
            <h2 className="text-2xl text-black font-bold mb-10 text-center">Choose A Category to Add Product:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                {
                    categories.map(category => <AddProductForm
                        key={category._id}
                        category={category}
                        setCategoryId={setCategoryId}
                        setCategoryName={setCategoryName}
                    ></AddProductForm>
                    )
                }
            </div>
            <div className='my-14'>
                {
                    categoryId &&
                    <ProductAddForm
                        categoryId={categoryId}
                        categoryName={categoryName}></ProductAddForm>

                }
            </div>
        </div>
    );
};

export default AddProducts;