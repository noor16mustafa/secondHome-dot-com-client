import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal';


const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-seven.vercel.app/seller/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    //handle delete product
    const handleDeleteProduct = product => {
        fetch(`https://resale-market-server-seven.vercel.app/product/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Delete Successful')
                }
            })
    }

    //handle advertise button
    const handleAdvertise = advertiseProduct => {
        console.log(advertiseProduct);
        const adPro = {
            uid: advertiseProduct._id,
            img: advertiseProduct.img,
            title: advertiseProduct.title,
            original_price: advertiseProduct.original_price,
            resale_price: advertiseProduct.resale_price,
            seller: advertiseProduct.seller,
            email: advertiseProduct.email,
            category: advertiseProduct.category,
            p_id: advertiseProduct.p_id
        }
        fetch('https://resale-market-server-seven.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adPro)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('add to advertise');

                }
                else {
                    toast.error(data.message);
                }
            })
    }

    if (isLoading) {
        <Loader></Loader>
    }
    return (
        <div className='w-full mx-14 my-14'>
            <h2 className="text-4xl text-center text-success my-10">My Product</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map(product => <tr key={product._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.title}</div>
                                            <div className="text-md ">{product.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-success badge-md">${product.resale_price}</span>
                                </td>
                                <td><button className="btn btn-outline btn-info btn-sm"
                                    onClick={() => handleAdvertise(product)}>Unsold</button></td>

                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete </label></td>

                            </tr>)
                        }



                    </tbody>
                    {
                        deletingProduct && <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete ${deletingProduct.title}. It cannot be undone.`}
                            successAction={handleDeleteProduct}
                            successButtonName="Delete"
                            modalData={deletingProduct}
                            closeModal={closeModal}
                        >
                        </ConfirmationModal>
                    }


                </table>
            </div>

        </div>
    );
};

export default MyProduct;