import React from 'react';
import Advertise from './Advertise/Advertise';
import Categories from './Categories/Categories';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Advertise></Advertise>

            {/*------ extra section -----*/}
            <div className='w-full  text-center mx-auto my-14'>
                <h2 className="text-4xl text-success font-bold my-10">Our Customer....</h2>
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-gray-300">

                    <div className="stat w-80 h-60 text-center">
                        <div className="stat-title font-bold text-2xl text-black">Total Customer</div>
                        <div className="stat-value text-blue-800 text-4xl">31K</div>
                        <div className="stat-desc text-xl text-red-700">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat w-80 text-center bg-info">
                        <div className="stat-title font-bold text-2xl text-black">New Users</div>
                        <div className="stat-value text-blue-800 text-4xl">4,200</div>
                        <div className="stat-desc text-xl text-red-700">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat w-80 text-center">
                        <div className="stat-title font-bold text-2xl text-black">New Registers</div>
                        <div className="stat-value text-blue-800 text-4xl">1,200</div>
                        <div className="stat-desc text-xl text-red-700">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;