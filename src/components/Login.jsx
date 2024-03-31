import React from 'react';
import Helper from "../utility/Helper.jsx";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        if (Helper.isEmpty(email)) {
            toast.error("Email is required!");
        } else {
            setSubmit(true);
            axios.post(`${Helper.API_URL()}/user-login`, { UserEmail: email })
                .then(res => {
                    setSubmit(false);
                    if (res.data['msg'] === "success") {
                        toast.success(res.data['data']);
                        sessionStorage.setItem("email", email);
                        navigate("/verify");
                    } else {
                        toast.error("Request Failed");
                    }
                })
                .catch(error => {
                    toast.error("An error occurred");
                    setSubmit(false);
                });
        }
    };

    return (

            <div className="main-sec d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 offset-4 d-none d-md-block border rounded bg-white p-5 shadow-lg">
                            <h2 className="text-dark-emphasis fw-bold fs-2 text-uppercase text-center">Please Login First</h2>

                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Your Email</label>
                                    <input type="number" className="form-control" id="number" name="number"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


    );
};

export default Login;