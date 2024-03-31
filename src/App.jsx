import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import VerifyPage from "./pages/VerifyPage";
import NotFound from "./pages/NotFound.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutUsPage from "./pages/aboutUsPage.jsx";
import Helper from "./utility/Helper.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {

    if (Helper.isLogin()){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path = "/about-us" element={<AboutUsPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path = "/about-us" element={<AboutUsPage/>}/>
                    <Route path="/verify" element={<VerifyPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

        )
    }


};

export default App;