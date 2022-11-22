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
                        title: "Case Study - App Factory",
                        description:
                            "App Factory, is a new company established by SK Planet in 2012, a globally recognized and respected leader in innovative mobile services. App Factory’s mission is to transform great ideas into compelling mobile apps for the global market. SK Planet was created by SK Telecom in November 2011 with the purpose of focusing on global businesses, including new media and digital content.",
                        url: "https://seta-international.com/case-study/sk-planet/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy
                title="About App Factory"
                description="App Factory, is a new company established by SK Planet in 2012, a globally
                recognized and respected leader in innovative mobile services. App Factory’s
                mission is to transform great ideas into compelling mobile apps for the
                global market. SK Planet was created by SK Telecom in November 2011 with the
                purpose of focusing on global businesses, including new media and digital
                content."
            />
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
                                App Factory is a startup company and wants to shorten the
                                time-to-market with innovative products and services. They need a
                                trust partner for augmenting development services, while not
                                sacrificing quality.
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
                        SETA has entered into a formal agreement with App Factory (a SK Telecom
                        company) as one of their strategic technology partners to assist with their
                        internal and external software development needs. With over 15+ software
                        developers and quality assurance engineers assisting with their internal
                        product development roadmap, each and every one of their high quality
                        software developers and quality assurance engineers works closely with their
                        internal organization to maximize their efficiency and productivity across
                        the globe. App Factory were able to quickly integrate SETA&apos;s industry
                        leading hybrid development model which allowed them to maximize efficiency
                        across their organization while reducing operational cost and maximizing
                        ROI.
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
