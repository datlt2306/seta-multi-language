/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";

const Breadcrumbs = dynamic(() => import("@/common/components/Breadcrumbs"));
const Location = () => {
    const { location, btn } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "SETA International's Location",
                        description:
                            "With offices in US and Vietnam, we offer optimally a combination of high quality near shore, offshore and onsite delivery models. As such, our clients are able to handle challenges of language barriers, time zones, and security.",
                        url: "https://seta-international.com/about/location/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <div
                className="banner-main"
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/location.jpg")',
                }}
            >
                <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2">
                    <div>
                        <Breadcrumbs />
                        <h1 className="banner__title">{location.title}</h1>
                        <p className="banner__desc">{location.description}</p>
                        <a
                            className="menu_contact banner__btn"
                            onClick={(e) => {
                                setTimeout(() => {
                                    document.getElementById("section-contact") &&
                                        document.getElementById("section-contact").scrollIntoView({
                                            behavior: "smooth",
                                            block: "end",
                                        });
                                }, 0);
                            }}
                        >
                            {btn.letTalk}
                        </a>
                    </div>
                </div>
            </div>
            <section className="bg-white py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{location.sectionOne.title}</h2>
                    </div>
                    <img
                        loading="lazy"
                        src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/location-2.jpg"
                        alt="CALIFORNIA, NORTH AMERICA"
                        className="my-10 lg:my-20 mx-auto"
                    />
                    <div className="md:grid md:grid-cols-2 gap-16">
                        <div className="text-lg">
                            <div className="uppercase text-[#E53E3E] md:inline-block border-b border-[#E53E3E] text-xl md:text-3xl my-6 md:mt-0 pb-3 flex items-center">
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/icons/pin.svg"
                                    alt=" CALIFORNIA, NORTH AMERICA"
                                    className="inline-block mr-4"
                                />
                                {location.sectionOne.placeOne.name}
                            </div>
                            <p className="text-[#2A4365] mb-4">
                                {location.sectionOne.placeOne.description}
                            </p>
                            <ul className="text-[#2A4365] mb-10">
                                {location.sectionOne.placeOne.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <Swiper slidesPerView={1} spaceBetween={30}>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/8.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/7.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/9.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/10.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/11.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/12.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="text-lg">
                            <div className="uppercase text-[#E53E3E] md:inline-block border-b border-[#E53E3E] text-xl md:text-3xl my-6 md:mt-0 pb-3 flex items-center">
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/icons/pin.svg"
                                    alt=" HANOI, VIETNAM"
                                    className="inline-block mr-4"
                                />
                                {location.sectionOne.placeTwo.name}
                            </div>
                            <p className="text-[#2A4365] mb-4">
                                {location.sectionOne.placeTwo.description}
                            </p>
                            <ul className="text-[#2A4365] mb-10">
                                {location.sectionOne.placeTwo.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <Swiper slidesPerView={1} spaceBetween={30}>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/3.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/4.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/5.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/location/6.jpg"
                                        alt="Location"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Location;
