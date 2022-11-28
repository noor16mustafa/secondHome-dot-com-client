import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up Successful');
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role);
                        form.reset();
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)

            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://resale-market-server-seven.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content w-3/5">

                <div className="card sm:w-full  lg:w-1/2 shadow-2xl bg-base-100 mt-14 mb-14 text-center">
                    <h1 className="text-4xl font-bold pt-10"> Sign Up First</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Enter Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Choose Your Category?</span>

                                </label>
                                <select name='role' className="select select-bordered">
                                    <option value='Buyer' selected>Buyer</option>
                                    <option value='Seller'>Seller</option>

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