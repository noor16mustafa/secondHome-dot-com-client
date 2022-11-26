import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="grid place-content-center mt-8">
            <img src="https://t3.ftcdn.net/jpg/01/07/05/28/240_F_107052883_iC9J5BShOPBBiAzFCxVZu6VFNWV1V9V3.jpg" alt="" />
            <div className='pt-6'>
                <h1 className='text-2xl font-bold text-blue-600/100'>Could not find the page...!!!</h1>

                <button className="btn btn-primary mt-4"><Link to='/home'>Back to home page..</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;