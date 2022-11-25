import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { category_id, category_name, picture } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-2xl text-white">{category_name}</h2>

                <div className="card-actions justify-center">
                    <Link to={`/category/${category_id}`}><button className="btn btn-primary">View All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;