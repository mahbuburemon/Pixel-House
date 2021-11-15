import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ReviewProcess from '../Dashboard/ReviewProcess/ReviewProcess';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Blog></Blog>

            <ReviewProcess></ReviewProcess>
            <Footer></Footer>

        </div>
    );
};

export default Home;