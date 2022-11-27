import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerSignIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    //--------google sign in----------

    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.displayName, user.email)
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(e => {

                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    //-----save google user------
    const saveUser = (displayName, email) => {
        const user = { name: displayName, email, role: "Buyer" };
        fetch('http://localhost:5000/users', {
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
    //------sign in with email and password-----
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                toast.success('Thanks for your access');
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }

    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content w-3/5">

                <div className="card  w-1/2 shadow-2xl bg-base-100 mt-14 mb-14">
                    <h1 className="text-5xl font-bold pt-10 text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
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
                                <label className="label">
                                    <span className="label-text-alt text-red-600 font-bold">{error}</span>

                                </label>
                            </div>
                            <div className="form-control mt-6 mb-10">
                                <button className="btn btn-success btn-outline">Login</button>
                            </div>
                            <p>New to this side? Please <Link to='/register'><span className='text-info font-semibold'>Sign Up</span></Link> First</p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn btn-error btn-outline">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;