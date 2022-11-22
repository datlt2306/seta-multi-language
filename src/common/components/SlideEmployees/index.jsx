/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "../FancyBox";

const SlideEmployees = ({ employees }) => {
    return (
        <div className="slider__employees relative">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".slider__employees .swiper-button-prev",
                    nextEl: ".slider__employees .swiper-button-next",
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
                {employees.map((employee, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox options={{ infinite: false }}>
                            <a data-fancybox="employee" data-src={`${employee.imgLarge}`}>
                                <img loading="lazy" src={`${employee.imgThumb}`} alt="EMPLOYEES" />
                            </a>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-prev -top-2 !left-5 xl:!-left-10 xl:top-1/2 mt-5"></div>
            <div className="swiper-button-next -top-2 !right-5 xl:!-right-10 xl:top-1/2 mt-5"></div>
        </div>
    );
};

export default SlideEmployees;
