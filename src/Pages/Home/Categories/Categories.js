import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])
    return (
        <div className='my-14 mx-auto text-center'>
            <h2 className="text-4xl font-bold text-success mb-10">Choose Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;