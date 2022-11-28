import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductAddForm = ({ categoryId, categoryName }) => {
    const { user } = useContext(AuthContext);

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const seller = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const title = form.title.value;
        const original_price = form.original_price.value;
        const resale_price = form.resale_price.value;
        const year = form.year.value;
        const condition = form.condition.value;
        const details = form.details.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = form.image.files[0];

        //post image on imgbb 
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imagedata => {
                if (imagedata.success) {

                    const product = {
                        p_id: categoryId,
                        title, category,
                        original_price, resale_price,
                        year, location, seller, email,
                        phone, condition, details,
                        img: imagedata.data.url

                    }
                    //save product information to database
                    fetch('https://resale-market-server-seven.vercel.app/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {

                            toast.success('Product added successfully');
                            form.reset();
                            navigate('/dashboard/myProduct');

                        })
                }
            })
            .catch(err => console.error(err))


    }

    return (
        <div className='mb-14'>
            <h2 className="text-2xl my-8">Fill All the Fields Properly</h2>
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>

                <input name="name" type="text" defaultValue={user?.displayName} disabled required placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email} disabled required placeholder="Email Address" className="input w-full input-bordered" />
                <input name="category" type="text" defaultValue={categoryName} disabled required placeholder="Category name" className="input w-full input-bordered" />
                <input name="title" type="text" placeholder="Product Title" required className="input w-full input-bordered" />
                <input name="original_price" type="text" placeholder="Original Price" required className="input w-full input-bordered" />
                <input name="resale_price" type="text" placeholder="Resale Price" required className="input w-full input-bordered" />
                <input name="year" type="text" placeholder="Buying year" required className="input w-full input-bordered" />
                <input name="condition" type="text" placeholder="Condition" required className="input w-full input-bordered" />
                <input name="details" type="text" placeholder="Product Description" required className="input w-full input-bordered" />
                <input name="phone" type="text" placeholder="Phone Number" required className="input w-full input-bordered" />
                <input name="location" type="text" placeholder="Your location" required className="input w-full input-bordered" />
                <input
                    type='file'

                    name='image'
                    accept='image/*'
                    required
                />
                <br />
                <input className='btn btn-info w-full' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default ProductAddForm;