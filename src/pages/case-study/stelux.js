/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));

const Stelux = () => {
    const { stelux } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${stelux.title}`,
                        description: `${stelux.description}`,
                        url: "https://seta-international.com/case-study/stelux/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={stelux.title} description={stelux.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/2.jpg"
                            alt="Stelux"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {stelux.challenge.title}
                            </h2>
                            <p
                                className="text-[#2A4365] leading-7 mt-8"
                                dangerouslySetInnerHTML={{
                                    __html: stelux.challenge.description,
                                }}
                            ></p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={stelux.challenge.thumbnailUrl}
                                alt={stelux.challenge.title}
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
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{stelux.solution.title}</h2>
                    <p className="text-white text-lg mt-5">{stelux.solution.description}</p>
                </div>
            </div>
            {/*End .services*/}
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-screen-custom mx-auto relative">
                    <div className="max-w-7xl px-8 mx-auto grid md:grid-cols-2 gap-12">
                        <div className="rounded">
                            <img
                                loading="lazy"
                                src={stelux.testimonial.thumbnailUrl}
                                alt="Stelux"
                                className="mx-auto"
                            />
                        </div>
                        <p className="leading-7">{stelux.testimonial.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stelux;
