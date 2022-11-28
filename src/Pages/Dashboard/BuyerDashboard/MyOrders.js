import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-seven.vercel.app/buyer/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        <Loader></Loader>
    }
    return (
        <div className='w-full mx-14 my-14'>
            <h2 className="text-4xl text-center text-success my-10">My Bookings</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Price</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(product => <tr key={product._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.item}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-success badge-md">${product.price}</span>
                                </td>
                                <td>
                                    {
                                        product.price && !product.paid &&
                                        <Link to={`/dashboard/payment/${product._id}`}>
                                            <button className="btn btn-outline btn-info btn-sm">Pay</button>
                                        </Link>
                                    }
                                    {
                                        product.price && product.paid &&
                                        <span className='text-red-700 font-bold'>Paid</span>
                                    }

                                </td>


                            </tr>)
                        }



                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default MyOrders;