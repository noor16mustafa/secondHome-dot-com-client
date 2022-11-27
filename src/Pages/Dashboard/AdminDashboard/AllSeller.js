import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import ConfirmationModal from '../../../Shared/ConfirmationModal';
import { MdVerifiedUser } from 'react-icons/md'

const AllSeller = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });

    //---------verify seller---------------
    const handleSellerVerify = id => {
        fetch(`http://localhost:5000/seller/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verification successful')
                    refetch();
                }
            })
    }

    //--------------Delete seller-----
    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${seller.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='flex flex-col justify-items-center mx-auto'>
            <h2 className="text-4xl text-center text-success my-14">Seller Information</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border border-solid">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((user, i) => <tr className='hover' key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user?.status !== 'verified' ?
                                        <button
                                            onClick={() => handleSellerVerify(user._id)}
                                            className='btn btn-xs btn-info'>Verify...</button>
                                        :

                                        < MdVerifiedUser className='text-info w-6 h-6'></MdVerifiedUser>
                                    }
                                </td>
                                <td> <label onClick={() => setDeletingSeller(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
                {
                    deletingSeller && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingSeller.name}. It wil be removed`}
                        successAction={handleDeleteSeller}
                        successButtonName="Delete"
                        modalData={deletingSeller}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllSeller;