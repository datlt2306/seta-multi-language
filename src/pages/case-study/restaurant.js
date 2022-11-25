/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Restaurant = () => {
    const { restaurant } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${restaurant.title}`,
                        description: `${restaurant.description}`,
                        url: "https://seta-international.com/case-study/restaurant/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={restaurant.title} description={restaurant.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            width={560}
                            height={550}
                            src="https://www.youtube.com/embed/kn897wXNTuQ"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {restaurant.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {restaurant.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={restaurant.challenge.thumbnailUrl}
                                alt="Challenge"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                style={{
                    background:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/bgSolution.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{restaurant.solution.title}</h2>
                    <p
                        className="text-white text-lg mt-5"
                        dangerouslySetInnerHTML={{
                            __html: restaurant.solution.description,
                        }}
                    ></p>
                </div>
            </div>
            {/*End .services*/}
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="md:grid md:grid-cols-2 gap-8">
                        <div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                            >
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant-expert/1.jpg"
                                        alt="The Restaurant Expert"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant-expert/2.jpg"
                                        alt="The Restaurant Expert"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant-expert/3.jpg"
                                        alt="The Restaurant Expert"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="text-center mt-10 md:mt-0">
                            <p
                                className="text-[#2A4365] text-lg"
                                dangerouslySetInnerHTML={{
                                    __html: restaurant.testimonial.content,
                                }}
                            ></p>
                            <img
                                loading="lazy"
                                src={restaurant.testimonial.avatarUrl}
                                alt="The Restaurant Expert"
                                style={{ width: 120, height: 120 }}
                                className="rounded-full mx-auto object-cover mt-6 mb-4"
                            />
                            <h4 className="font-bold text-[#2A4365] text-lg">
                                {restaurant.testimonial.author}
                            </h4>
                            <span>{restaurant.testimonial.position}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Restaurant;
