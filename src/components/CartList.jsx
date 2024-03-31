import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.jsx";
import toast from "react-hot-toast";
import helper from "../utility/Helper.jsx";
import Loader from "./Loader.jsx";

const CartList = () => {
    let [products, setProducts] = useState(null);

    useEffect(() => {
        (async  () =>{
            await getAllProduct();
        })();
    }, []);

    const getAllProduct = async () => {
       try{
           let response = await axios.get(Helper.API_URL() + "/cart-list", Helper.tokenHeader());
           let products = response.data['data'];
           setProducts(products);
       } 
       catch(error){
           helper.userUnauthorized(error.response.status);
       }

    }

    const removeCart = async (id) => {
        try {

            let res = await axios.get(`${Helper.API_URL()}/remove-cart/${id}`, Helper.tokenHeader());
            if(res.data['msg'] === "success"){
                toast.success("Product Removed to cart");
                await getAllProduct();
            }else{
                toast.error(res.data["Request Failed"]);
            }
        } catch (error) {
            helper.userUnauthorized(error.response.status);
        }
    }




    return (
        <div>
            {
                products == null ?
                    (<Loader/>) : (
                        <div className="container">
                            <h1 className="text-dark-emphasis text-center fw-bold mb-5 mt-5 text-uppercase">Your Product List</h1>

                            <div className="row">
                                {products.map((product, i) => {
                                    return (
                                        <div className="col-md-3">
                                            <div className="card mb-5 shadow border-0">
                                                <img src={product['product']['image']} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{product['product']['title']}</h5>
                                                    <p className="card-text"><span
                                                        className="fw-bold text-decoration-underline">Short Details: </span>{product['short_des']}
                                                    </p>
                                                    <p className="card-text"><span
                                                        className="fw-bold">Price: </span>{product['product']['price']}</p>
                                                    <button onClick={() => removeCart(product['product']['id'])}
                                                            className="btn btn-danger">Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    )}
        </div>
    );
};

export default CartList;