import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { title, resale_price, img, p_id, _id } = product;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const userName = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyer: userName,
            email,
            item, price,
            phone,
            p_id,
            image: img,
            location,
            uid: _id
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="item" type="text" defaultValue={title} disabled placeholder="" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={resale_price} disabled placeholder="" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-info w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;