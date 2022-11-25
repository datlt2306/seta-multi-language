/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const BeautyEncounter = () => {
    const { beautyEncounter } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${beautyEncounter.title}`,
                        description: `${beautyEncounter.description}`,
                        url: "https://seta-international.com/case-study/beauty-encounter/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy
                title={beautyEncounter.title}
                description={beautyEncounter.description}
            />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
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
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/beautycounter/1.jpg"
                                    alt="Beauty Encounter"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/beautycounter/2.jpg"
                                    alt="Beauty Encounter"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/beautycounter/3.jpg"
                                    alt="Beauty Encounter"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {beautyEncounter.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {beautyEncounter.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/1.jpg"
                                alt="Challenge"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/bgSolution.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">
                        {beautyEncounter.solution.title}
                    </h2>
                    <p className="text-white text-lg mt-5">
                        {beautyEncounter.solution.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default BeautyEncounter;
