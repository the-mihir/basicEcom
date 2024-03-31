import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Helper from "../utility/Helper.jsx";
import toast from "react-hot-toast";
import Loader from "./Loader.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomModal = () => {
    let [submit, setSubmit] = useState(false);
    let navigate = useNavigate();

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


    const [show, setShow] = useState(false); // State variable for controlling modal visibility

    const handleClose = () => setShow(false); // Function to close the modal
    const handleShow = () => setShow(true); // Function to show the modal

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <span className="text-uppercase">Login</span>
            </Button>

            <Modal show={show} onHide={handleClose}> {/* Modal component */}
                <Modal.Header closeButton>
                    <Modal.Title>Please Input your Email Here</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-5">
                    <form onSubmit={onSubmit} className="p-4"> {/* Form inside the modal */}
                        <label className="form-label">Type your Email</label>
                        <input type="email" name="email" className="form-control" /> {/* Email input field */}
                        <Button disabled={submit} className="btn btn-primary mt-3 w-100 mx-auto" type="submit">
                            {submit ? (<Loader />) : ("Submit")} {/* Button to submit the form */}
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CustomModal;
