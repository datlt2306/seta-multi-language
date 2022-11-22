/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Avia = () => {
    const { avia } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - AVIA",
                        description:
                            'AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service. ​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These "empty legs" can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience',
                        url: "https://seta-international.com/case-study/avia/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy
                title="About AVIA"
                description='AVIA is a first of its kind, real time, digital charter marketplace,
                marrying the latest in technology with traditional boutique customer
                service. ​AVIA proprietary technology specializes in connecting nominally
                priced, zero passenger, positioning flights with financially savvy
                passengers. These "empty legs" can be sold at pennies on the
                dollar and finally bridge the cost gap between a business class commercial
                flight and a true private charter experience'
            />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <video controls autoPlay className="w-full">
                            <source
                                src="https://www.flyavia.net/uploads/b/40725487-835744996901986208/avia_112818_976.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {avia.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {avia.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={avia.challenge.thumbnailUrl}
                                alt={avia.challenge.title}
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
                <div className="max-w-5xl px-4 mx-auto flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold text-center">
                        {avia.solution.title}
                    </h2>
                    <div>
                        <p className="text-white text-lg mt-5">{avia.solution.description}</p>
                        <div
                            className="grid grid-cols-2 gap-8 text-white text-lg mt-5"
                            dangerouslySetInnerHTML={{
                                __html: avia.solution.content,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-7xl mx-auto px-5">
                    <Swiper slidesPerView={4} spaceBetween={30}>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/4.jpg"
                                alt="Avia"
                                className="mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/5.jpg"
                                alt="Avia"
                                className="mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/6.jpg"
                                alt="Avia"
                                className="mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/7.jpg"
                                alt="Avia"
                                className="mx-auto"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Avia;
