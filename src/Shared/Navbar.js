import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-success text-neutral">
            <div className="navbar-start">

                {/* <div className='ml-4' >
                        <img className="w-10 rounded" src={image} alt='' />

                    </div> */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>


                        <>
                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><button onClick={handleLogOut}>LogOut</button></li>

                                    </>
                                    :
                                    <>
                                        <li><Link to='/login'>LogIn</Link></li>
                                        <li><Link to='/register'>Sign Up</Link></li>
                                    </>
                            }
                        </>
                    </ul>
                </div>



                <Link className="btn btn-ghost normal-case text-xl" to='/'><p className='font-extrabold text-white font-mono text-3xl italic'>SecondHome.Com</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>

                    <>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><button onClick={handleLogOut}>LogOut</button></li>

                                </>
                                :
                                <>
                                    <li><Link to='/login'>LogIn</Link></li>
                                    <li><Link to='/register'>Sign Up</Link></li>
                                </>
                        }
                    </>


                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>



        </div>
    );
};

export default Navbar;