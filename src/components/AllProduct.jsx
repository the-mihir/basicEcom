import React, {useEffect, useState} from 'react';
import Helper from "../utility/Helper.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";
import toast from "react-hot-toast";
import helper from "../utility/Helper.jsx";

const AllProduct = () => {

    let [products, setProducts] = useState(null);


    useEffect(() => {
        (async  () =>{
            await getAllProduct();
        })();
    }, []);


    const getAllProduct = async () => {
        let response = await axios.get(Helper.API_URL() + "/product-list");
        let products = response.data['data'];
        setProducts(products);

    }

    const addToCart = async (id) => {
        try {

            let res = await axios.get(`${Helper.API_URL()}/create-cart/${id}`, Helper.tokenHeader());
            if(res.data['msg'] === "success"){
                toast.success("Product added to cart");
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
                products==null?
                    (<Loader/>):(
                        <div className="container">
                            <h1 className="text-dark-emphasis text-center fw-bold mt-5 text-uppercase">Find Awsome Products</h1>
                            <p className="text-center mb-5">Find your product, as you desire</p>
                            <div className="row">
                                { products.map((product, i)=>{
                                        return(
                                            <div className="col-md-3">
                                                <div className="card mb-5 shadow border-0">
                                                    <img src={product['image']} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product['title']}</h5>
                                                        <p className="card-text"><span className="fw-bold text-decoration-underline">Short Details: </span>{product['short_des']}</p>
                                                        <p className="card-text"> <span className="fw-bold">Price: </span>{product['price']}</p>
                                                        <button onClick={() => addToCart(product['id'])} className="btn btn-primary">Add to cart</button>
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

export default AllProduct;