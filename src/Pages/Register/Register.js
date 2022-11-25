import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content w-3/5">

                <div className="card  w-1/2 shadow-2xl bg-base-100 mt-14 mb-14">
                    <h1 className="text-4xl font-bold pt-10"> Sign Up First</h1>
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Choose Your Category?</span>

                                </label>
                                <select className="select select-bordered">
                                    <option selected>Buyer</option>
                                    <option>Seller</option>

                                </select>

                            </div>
                            <div className="form-control mt-6 mb-10">
                                <button className="btn btn-success btn-outline">Sign Up</button>
                            </div>
                            <p>Already have an account? Please <Link to='/login'><span className='text-info font-semibold'>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;