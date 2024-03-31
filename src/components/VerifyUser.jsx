import React, { useState } from 'react';
import axios from "axios";
import Helper from "../utility/Helper.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {

    let [submit, setSubmit] = useState(false);
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const number = formData.get('number');
        if (Helper.isEmpty(number)) {
            toast.error("OTP is required!");
        } else {
            let email = sessionStorage.getItem('email');
            setSubmit(true);
            try {
                let res = await axios.post(`${Helper.API_URL()}/verify-login`, { UserEmail: email, OTP: number });
                setSubmit(false);

                if (res.data['msg'] === "success") {
                    sessionStorage.setItem("token", res.data['data']);
                    window.location.href = "/";
                    navigate("/");
                } else {
                    toast.error(res.data['message']);
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("An error occurred while verifying OTP.");
            }
            setSubmit(false);
        }
    };

    return (
        <div className="main-sec d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-4 d-none d-md-block border rounded bg-white p-5 shadow-lg">
                        <h2 className="text-dark-emphasis fw-bold fs-2 text-uppercase text-center">Please Verify your
                            email</h2>
                        <p className="text-center w-50 mx-auto text-success">We just sent 4 digit Verification OTP to your email</p>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Your OTP</label>
                                <input type="number" className="form-control" id="number" name="number" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyUser;
