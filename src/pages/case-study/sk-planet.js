/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import Link from "next/link";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Skplanet = () => {
    const { skplanet } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${skplanet.title}`,
                        description: `${skplanet.description}`,
                        url: "https://seta-international.com/case-study/sk-planet/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={skplanet.title} description={skplanet.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg"
                            alt="App Factory"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {skplanet.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {skplanet.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={skplanet.challenge.thumbnailUrl}
                                alt={skplanet.challenge.title}
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
                    <h2 className="text-white text-5xl font-bold">{skplanet.solution.title}</h2>
                    <p className="text-white text-lg mt-5">
                        {skplanet.solution.description}
                        <br />
                        <br />
                        See
                        <Link href="https://www.cnet.com/pictures/jukebox-hero-lets-you-keep-the-party-rocking-pictures">
                            https://www.cnet.com/pictures/jukebox-hero-lets-you-keep-the-party-rocking-pictures
                        </Link>
                    </p>
                </div>
            </div>
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-7xl mx-auto px-5">
                    <Swiper slidesPerView={4} spaceBetween={30}>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/4.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/5.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/6.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/7.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/8.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/9.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/10.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/11.jpg"
                                alt="App Factory"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Skplanet;
