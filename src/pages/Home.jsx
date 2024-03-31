import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import Hero from "../components/Hero.jsx";
import AllProduct from "../components/AllProduct.jsx";
import Cta from "../components/cta.jsx";


const Home = () => {
    return (
        <MasterLayout>
            <Hero/>
            <AllProduct/>
        </MasterLayout>
    );
};

export default Home;