/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Ujazo = () => {
    const { ujazo } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - Ujazo",
                        description:
                            "Ujazo was established with one primary mission – Help consumers be aware of their health status and lean how to improve the areas that needs more attention",
                        url: "https://seta-international.com/case-study/ujazo/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={ujazo.title} description={ujazo.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/3.jpg"
                            alt="Ujazo"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {ujazo.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {ujazo.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={ujazo.challenge.thumbnailUrl}
                                alt="Ujazo"
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
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{ujazo.solution.title}</h2>
                    <p className="text-white text-lg mt-5">{ujazo.solution.description}</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/4.jpg"
                            alt="Ujazo"
                        />
                    </div>
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/5.jpg"
                            alt="Ujazo"
                        />
                    </div>
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/6.jpg"
                            alt="Ujazo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ujazo;
