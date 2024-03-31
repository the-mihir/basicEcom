import React from 'react';
import CartList from "../components/CartList.jsx";
import MasterLayout from "../components/MasterLayout.jsx";

const CartPage = () => {
    return (
        <MasterLayout>
            <CartList />
        </MasterLayout>
    );
};

export default CartPage;

