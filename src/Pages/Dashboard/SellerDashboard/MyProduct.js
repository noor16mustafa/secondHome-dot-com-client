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
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/product/${product._id}`, {
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

                                <td> <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>

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