/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Tollroads = () => {
    const { tollroads } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${tollroads.title}`,
                        description: `${tollroads.description}`,
                        url: "https://seta-international.com/case-study/toll-roads",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={tollroads.title} description={tollroads.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/4.jpg"
                            alt="The Toll Roads"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {tollroads.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {tollroads.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={tollroads.challenge.thumbnailUrl}
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
                    <h2 className="text-white text-5xl font-bold">{tollroads.solution.title}</h2>
                    <p
                        className="text-white text-lg mt-5"
                        dangerouslySetInnerHTML={{
                            __html: tollroads.solution.description,
                        }}
                    ></p>
                </div>
            </div>
            <section>
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center py-24">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg"
                                alt="The Toll Roads"
                            />
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/3.jpg"
                                alt="The Toll Roads"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tollroads;
