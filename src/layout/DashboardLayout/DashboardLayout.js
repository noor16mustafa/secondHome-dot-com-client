import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-items-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-emerald-100">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li className='bg-success my-2'><Link to="/dashboard"><span className='text-2xl font-bold'>My Orders</span></Link></li>

                        {
                            isAdmin &&
                            <>
                                <li className='bg-success my-2'><Link to="/dashboard/allSellers"><span className='text-2xl font-bold'>All Sellers</span></Link></li>
                                <li className='bg-success my-2'><Link to="/dashboard/allBuyers"><span className='text-2xl font-bold'>All Buyers</span></Link></li>
                                <li className='bg-success my-2'><Link to="/dashboard/reportedItem"><span className='text-2xl font-bold'>Reported Item</span></Link></li>
                            </>
                        }

                        <li className='bg-success my-2'><Link to="/dashboard/addProduct"><span className='text-2xl font-bold'>Add Product</span></Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;