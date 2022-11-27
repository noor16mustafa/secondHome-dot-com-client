import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductAddForm = ({ categoryId, categoryName }) => {
    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {

    }

    return (
        <div>
            <h2 className="text-2xl my-8">Fill All the Fields Properly</h2>
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>

                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                <input name="category" type="text" defaultValue={categoryName} disabled placeholder="Category name" className="input w-full input-bordered" />
                <input name="title" type="text" placeholder="Product Title" className="input w-full input-bordered" />
                <input name="original_price" type="text" placeholder="Original Price" className="input w-full input-bordered" />
                <input name="resale_price" type="text" placeholder="Resale Price" className="input w-full input-bordered" />
                <input name="year" type="text" placeholder="Buying year" className="input w-full input-bordered" />
                <input name="condition" type="text" placeholder="Condition" className="input w-full input-bordered" />
                <input name="details" type="text" placeholder="Product Description" className="input w-full input-bordered" />
                <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name="location" type="text" placeholder="Your location" className="input w-full input-bordered" />
                <input name="img" type="file" className="input w-full" />
                <br />
                <input className='btn btn-info w-full' type="submit" value="Book" />
            </form>
        </div>
    );
};

export default ProductAddForm;