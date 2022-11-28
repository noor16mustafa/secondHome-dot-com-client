import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Payment = () => {
    const { user } = useContext(AuthContext);
    const booking = useLoaderData();
    const { item, price, uid, _id } = booking;
    console.log(booking);
    return (
        <div className='flex flex-col justify-items-center mx-auto my-14'>
            <h2 className="text-4xl font-bold text-success my-8">Make Payment for <strong>{item}</strong></h2>
            <form className='grid grid-cols-1 gap-3 mt-10'>

                <input name="name" type="text" defaultValue={user?.displayName} disabled required placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email} disabled required placeholder="Email Address" className="input w-full input-bordered" />
                <input name="title" type="text" defaultValue={item} placeholder="Product Title" required className="input w-full input-bordered" />
                <input name="price" type="text" defaultValue={price} placeholder=" Price" required className="input w-full input-bordered" />

                <br />
                <input className='btn btn-info w-full' type="submit" value="Pay" />
            </form>
        </div>
    );
};

export default Payment;