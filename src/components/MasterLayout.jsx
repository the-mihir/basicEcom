import React from 'react';
import Footer from "./Footer.jsx";
import MainNav from "./MainNav.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <>
            <MainNav/>
            {props.children}
            <Toaster position="top-right"/>
            <Footer/>
        </>



    );
};

export default MasterLayout;