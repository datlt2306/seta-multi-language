/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideOurPeople = ({ ourPeople }) => {
    return (
        <div className="slider__ourPeople relative">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".slider__ourPeople .swiper-button-prev",
                    nextEl: ".slider__ourPeople .swiper-button-next",
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
                {ourPeople.map((people, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <div className="rounded">
                                <img
                                    src={`${people.imageUrl}`}
                                    alt="OUR PEOPLE VOICES"
                                    className="w-full object-cover rounded"
                                />
                            </div>
                            <div className="border-b border-[#3182CE] py-3 mb-3">
                                <span className="text-[#2A4365] font-bold block mb-1">
                                    {people.name}
                                </span>
                                <span className="text-[#3182CE]">{people.position}</span>
                            </div>
                            <p
                                className="text-[#2A4365]"
                                dangerouslySetInnerHTML={{ __html: people.desc }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next  -top-6 !right-5 xl:!-right-10 xl:top-1/2 mt-5"></div>
            <div className="swiper-button-prev -top-6 !left-5 xl:!-left-10 xl:top-1/2 mt-5"></div>
        </div>
    );
};

export default SlideOurPeople;
