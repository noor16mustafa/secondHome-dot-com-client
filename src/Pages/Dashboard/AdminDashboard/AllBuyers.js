import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import ConfirmationModal from '../../../Shared/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/buyer/${buyer._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${buyer.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='flex flex-col justify-items-center mx-auto'>
            <h2 className="text-4xl text-center text-success my-14">Buyers Information</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border border-solid">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((user, i) => <tr className='hover' key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> <label onClick={() => setDeletingBuyer(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
                {
                    deletingBuyer && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingBuyer.name}. It wil be removed`}
                        successAction={handleDeleteBuyer}
                        successButtonName="Delete"
                        modalData={deletingBuyer}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllBuyers;