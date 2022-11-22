/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import "swiper/css";

import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Ireland = () => {
    const { idaIreland } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - IDA Ireland",
                        description:
                            "The IDA or Ireland's inward investment promotion agency is responsible for attracting and developing foreign investment into Ireland.",
                        url: "https://seta-international.com/case-study/ida-ireland/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={idaIreland.title} description={idaIreland.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {idaIreland.value.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {idaIreland.value.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/2.jpg"
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
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/3.jpg"
                            alt="IoT Connectivity Management"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/4.jpg"
                            alt="Aeris Mobility Suite"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/5.jpg"
                            alt="Aeris Mobility Suite"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ireland;
