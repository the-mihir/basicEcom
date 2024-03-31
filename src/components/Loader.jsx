import React from 'react';

const Loader = () => {
    return (
        <div className="container">

            <div className="d-flex justify-content-center">
                <div className="spinner-border" variant="primary" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;