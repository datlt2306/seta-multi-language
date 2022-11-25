/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const MotionGlobal = () => {
    const { motionGlobal } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${motionGlobal.title}`,
                        description: `${motionGlobal.description}`,
                        url: "https://seta-international.com/case-study/motion-global/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={motionGlobal.title} description={motionGlobal.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            height={550}
                            src="https://www.youtube.com/embed/KNBDu_Nxqgw"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {motionGlobal.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {motionGlobal.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={motionGlobal.challenge.thumbnailUrl}
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
                    <h2 className="text-white text-5xl font-bold">{motionGlobal.solution.title}</h2>
                    <p className="text-white text-lg mt-5">{motionGlobal.solution.description}</p>
                </div>
            </div>
            <section>
                <div className="max-w-7xl mx-auto px-5 py-24">
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
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/4.jpg"
                                alt="Motion Global"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/4.jpg"
                                alt="Motion Global"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/2.jpg"
                                alt="Motion Global"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default MotionGlobal;
