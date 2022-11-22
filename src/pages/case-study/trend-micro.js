/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import Link from "next/link";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Trendmicro = () => {
    const { trendmicro } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - Trend Micro",
                        description:
                            "As a global leader in cloud security, Trend Micro develops Internet content security and threat management solutions that make the world safe for businesses and consumers to exchange digital information. With more than 20 years of experience, Trend Micro is recognized as the market leader in server security for delivering top-ranked client, server, and cloud-based security solutions that stop threats faster and protect data in physical, virtualized, and cloud environments.",
                        url: "https://seta-international.com/case-study/trend-micro",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy
                title="About Trend Micro"
                description="As a global leader in cloud security, Trend Micro develops Internet content
                security and threat management solutions that make the world safe for
                businesses and consumers to exchange digital information. With more than 20
                years of experience, Trend Micro is recognized as the market leader in
                server security for delivering top-ranked client, server, and cloud-based
                security solutions that stop threats faster and protect data in physical,
                virtualized, and cloud environments."
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
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/4.jpg"
                                    alt="Trend Micro"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/5.jpg"
                                    alt="Trend Micro"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/6.jpg"
                                    alt="Trend Micro"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {trendmicro.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                Trend Micro needs a strong partner with extensive experience and
                                knowledge in security to augment their internal teams.
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/1.jpg"
                                alt="Trend Micro"
                                className="mx-auto w-8/12"
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
                className="section bg-cover bg-no-repeat"
            >
                <div className="max-w-7xl mx-auto px-5  text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{trendmicro.solution.title}</h2>
                    <see className="text-white text-lg mt-5">
                        {trendmicro.solution.description}
                        <br />
                        <br />
                        See one example at{" "}
                        <Link href="https://whatsyourstory.trendmicro.com">
                            https://whatsyourstory.trendmicro.com
                        </Link>
                        <p />
                    </see>
                </div>
            </div>
            <section>
                <div className="max-w-7xl mx-auto px-5  text-center flex flex-col items-center py-24">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/2.jpg"
                                alt="Trend Micro"
                            />
                        </div>
                        <div className="text-center leading-relaxed">
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/7.jpg"
                                alt="Trend Micro"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trendmicro;
