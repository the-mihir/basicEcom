import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  >
                <SwiperSlide>
                    <div className="slider__one">
                         <div className="row">
                             <div className="col-12">
                                 <div className="container">
                                     <div className="hero__info">
                                         <div className="hero">
                                             <h6 className="fw-medium mb-2 fs-6 text-primary-emphasis">Just go with style</h6>
                                             <h1 className="text-dark-emphasis fw-bold my-2 fs-1">Best Mobile <br/> With Best Price</h1>
                                             <p className="mb-3"> Lorem ipsum elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                             <button className="btn btn-outline-primary me-2">Shop Now</button> <button className="btn btn-primary">More Products</button>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider__two">
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div className="hero__info">
                                        <div className="hero">
                                            <h6 className="fw-medium mb-2 fs-6 text-primary-emphasis">Just go with
                                                style</h6>
                                            <h1 className="text-dark-emphasis fw-bold my-2 fs-1">Best Laptop <br/> With
                                                Best Price</h1>
                                            <p className="mb-3"> Lorem ipsum elit. Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. <br/>Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. </p>
                                            <button className="btn btn-outline-primary me-2">Shop Now</button>
                                            <button className="btn btn-primary">More Products</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__three">
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div className="hero__info">
                                        <div className="hero">
                                            <h6 className="fw-medium mb-2 fs-6 text-primary-emphasis">Just go with
                                                style</h6>
                                            <h1 className="text-dark-emphasis fw-bold my-2 fs-1">Best Headphone <br/> With
                                                Best Price</h1>
                                            <p className="mb-3"> Lorem ipsum elit. Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. <br/>Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. </p>
                                            <button className="btn btn-outline-primary me-2">Shop Now</button>
                                            <button className="btn btn-primary">More Products</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
