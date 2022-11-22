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
                        title: "Case Study - Motion Global",
                        description:
                            " Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
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
                                It’s hard and slow for Motion Global to find enough high-quality
                                resources in Shanghai to expand their business globally and
                                technically maintain more than one hundred ecommerce sites all over
                                the world. They started looking for outsourcing services in other
                                cities in mainland China, India, Philippines, and Vietnam. It’s not
                                easy to make a final decision since there are many vendors out there
                                and they have no experience of development outsourcing before.
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/1.jpg"
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
                    <h2 className="text-white text-5xl font-bold">Solution</h2>
                    <p className="text-white text-lg mt-5">
                        Fortunately, the CEO of Motion Global was referred to SETA by a trusted
                        partner. Over 5 years, SETA team helps Motion Global with both front-end and
                        back-end development and is involved in all technical components of the
                        ecommerce platform.
                    </p>
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
