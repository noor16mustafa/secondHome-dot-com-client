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
        </div>
    );
};

export default Home;