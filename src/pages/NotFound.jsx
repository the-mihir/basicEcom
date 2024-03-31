import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import notFound from "../assets/images/404.png";

const NotFound = () => {
    return (
        <MasterLayout>
            <img className="object-fit-cover w-100 vh-100" src={notFound} alt=""/>
        </MasterLayout>
    );
};

export default NotFound;