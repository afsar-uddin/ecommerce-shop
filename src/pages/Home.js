import React from 'react';
import Anouncement from '../Components/Anouncement';
import Categories from '../Components/Categories';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
            <Anouncement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;