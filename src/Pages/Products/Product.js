import React from 'react';

const Product = ({ product, setProduct }) => {
    const { condition, details, email, img, location, original_price, phone, resale_price, seller, title, year } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-full lg:w-1/2 my-14">
            <figure className='w-full lg:w-1/2'><img className='h-full w-full' src={img} alt="" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title text-3xl text-blue-900">{title}</h2>
                <h2 className=" text-xl "><strong>Details:</strong> {details}</h2>
                <h2 className=" text-xl "><strong>Condition:</strong> {condition}</h2>
                <h2 className=" text-xl "><strong>Original Price:</strong>$ {original_price}</h2>
                <h2 className=" text-xl "><strong>Resale Price:</strong>$ {resale_price}</h2>
                <h2 className=" text-xl "><strong>Buying Year:</strong> {year}</h2>
                <h2 className=" text-xl "><strong>Location:</strong> {location}</h2>
                <hr ></hr>
                <h2 className=" text-xl "><strong className='text-success'>Seller:</strong> {seller}</h2>
                <h2 className=" text-xl "><strong className='text-success'>Email:</strong> {email}</h2>
                <h2 className=" text-xl "><strong className='text-success'>Phone:</strong> {phone}</h2>
                <p>Posting Time: </p>
                <div className="card-actions justify-end">

                    <label onClick={() => setProduct(product)}
                        htmlFor="booking-modal" className="btn btn-success">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;