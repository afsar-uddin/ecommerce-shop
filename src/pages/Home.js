import React from 'react';
import Anouncement from '../Components/Anouncement';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
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
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;