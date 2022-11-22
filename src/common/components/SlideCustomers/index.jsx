/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "../FancyBox";

const SlideCustomers = ({ customers }) => {
    return (
        <div className="slider__customers relative">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".slider__customers .swiper-button-prev",
                    nextEl: ".slider__customers .swiper-button-next",
                }}
                breakpoints={{
                    320: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    992: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
                {customers.map((customer, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox options={{ infinite: false }}>
                            <a data-fancybox="customer" data-src={`${customer.imgLarge}`}>
                                <img
                                    loading="lazy"
                                    src={`${customer.imgThumb}`}
                                    alt="OUR CUSTOMERS"
                                />
                            </a>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next -top-2 !right-5 xl:!-right-10 xl:top-1/2 mt-5"></div>
            <div className="swiper-button-prev -top-2 !left-5 xl:!-left-10 xl:top-1/2 mt-5"></div>
        </div>
    );
};

export default SlideCustomers;
