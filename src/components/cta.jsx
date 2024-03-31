import React from 'react';
import {Accordion} from "react-bootstrap";

const Cta = () => {
    return (
        <div className="bg-dark-subtle py-5 ">
            <div className="container">
                <h2 className="text-center text-dark-emphasis fw-bold fs-2 text-uppercase">Find Us Here</h2>
                <div className="row">
                    <div className="col-md-6 my-5">
                        <h3 className="text-dark-emphasis fw-bold fs-4 pb-2">Why We are best in Merket</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                    <div className="col-md-6">


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cta;