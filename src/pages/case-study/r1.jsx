/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import "swiper/css";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const R1 = () => {
    const { r1 } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - R1 Concept",
                        description:
                            "R1 Concepts is a leading manufacturer and retailer of automotive OEM and aftermarket high-performance brake parts.  They engaged with SETA to build a comprehensive, custom e-commerce and inventory and order management solution to replace their existing system.",
                        url: "https://seta-international.com/case-study/r1",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={r1.title} description={r1.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">{r1.value.title}</h2>
                            <p className="text-[#2A4365] leading-7 mt-8">{r1.value.content}</p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/2.jpg"
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
                    <h2 className="text-white text-5xl font-bold"></h2>
                    <p className="text-white text-lg mt-5"></p>
                </div>
            </div>
            <div className="max-w-screen-custom mx-auto relative py-20">
                <div className="max-w-7xl px-8 mx-auto grid md:grid-cols-3 gap-8">
                    <div>
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/3.jpg"
                            alt="IoT Connectivity Management"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/4.jpg"
                            alt="Aeris Mobility Suite"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/5.jpg"
                            alt="Aeris Mobility Suite"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default R1;
