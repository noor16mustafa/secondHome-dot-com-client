
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M67b0LnDCY6HKUezn6BH53nrtkUJrt8lmMeXnKzwF7xJxOt6ZQaPFIQgIUMa1SYhE2UPU7zSKG4mX1xSRnod62W00O5XamUUP');

const Payment = () => {
    const { user } = useContext(AuthContext);
    const booking = useLoaderData();
    const { item, price } = booking;


    return (
        <div className='flex flex-col justify-items-center mx-auto my-14'>
            <h2 className="text-4xl font-bold text-success my-8">Make Payment for <strong>{item}</strong></h2>
            <div className='grid grid-cols-1 gap-3 mt-10'>

                <input name="name" type="text" defaultValue={user?.displayName} disabled required placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email} disabled required placeholder="Email Address" className="input w-full input-bordered" />
                <input name="title" type="text" defaultValue={item} placeholder="Product Title" required className="input w-full input-bordered" />
                <input name="price" type="text" defaultValue={price} placeholder=" Price" required className="input w-full input-bordered" />
                <div className='mt-4 w-96'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking} />
                    </Elements>
                </div>



            </div>
        </div>
    );
};

export default Payment;