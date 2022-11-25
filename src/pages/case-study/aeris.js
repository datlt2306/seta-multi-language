/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));

const Aeris = () => {
    const { aeris } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${aeris.title}`,
                        description: `${aeris.description}`,
                        url: "https://seta-international.com/case-study/aeris/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={aeris.title} description={aeris.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            height={550}
                            src="https://www.youtube.com/embed/GcLDvwGdzys?&showinfo=0&controls=2&autohide=1&modestbranding=1"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {aeris.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {aeris.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={aeris.challenge.thumbnailUrl}
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
                <div className="max-w-7xl mx-auto px-5  text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{aeris.solution.title}</h2>
                    <p className="text-white text-lg mt-5">{aeris.solution.description}</p>
                </div>
            </div>
            <div className="max-w-screen-custom mx-auto relative py-20">
                <div className="max-w-7xl px-8 mx-auto grid md:grid-cols-2 gap-12">
                    {aeris.projects.map((item, index) => (
                        <div key={index}>
                            <div className="rounded">
                                <img loading="lazy" src={item.thumbnailUrl} alt={item.name} />
                            </div>
                            <h2 className="font-bold text-[#2C5282] text-xl my-5">{item.name}</h2>
                            <p className="leading-7">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="max-w-7xl mx-auto px-5 pb-24">
                    <div className="text-center pb-10">
                        <h2 className="font-light text-[#2A4365] text-4xl md:text-5xl mb-4">
                            {aeris.result}
                        </h2>
                    </div>
                    <Swiper slidesPerView={4} spaceBetween={30}>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/1.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/3.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/3.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/4.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/5.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/6.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/7.jpg"
                                alt="Aeris Mobility Suite in Action"
                            />
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Aeris;
