import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content w-3/5">

                <div className="card  w-1/2 shadow-2xl bg-base-100 mt-14 mb-14">
                    <h1 className="text-5xl font-bold pt-10">Login now!</h1>
                    <div className="card-body">
                        <form>
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
                            <div className="form-control mt-6 mb-10">
                                <button className="btn btn-success btn-outline">Login</button>
                            </div>
                            <p>New to this side? Please <Link to='/register'><span className='text-info font-semibold'>Sign Up</span></Link> First</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;