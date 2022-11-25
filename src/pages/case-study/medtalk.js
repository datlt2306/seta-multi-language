/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Medtalk = () => {
    const { medtalk } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${medtalk.title}`,
                        description: `${medtalk.description}`,
                        url: "https://seta-international.com/case-study/medtalk/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={medtalk.title} description={medtalk.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/3.jpg"
                            alt="MedTalk"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {medtalk.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {medtalk.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={medtalk.challenge.thumbnailUrl}
                                alt={medtalk.challenge.title}
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
                    <h2 className="text-white text-5xl font-bold">{medtalk.solution.title}</h2>
                    <p
                        className="text-white text-lg mt-5"
                        dangerouslySetInnerHTML={{
                            __html: medtalk.solution.description,
                        }}
                    ></p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/4.jpg"
                            alt="Medtalk"
                        />
                    </div>
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/5.jpg"
                            alt="Medtalk"
                        />
                    </div>
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/6.jpg"
                            alt="Medtalk"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Medtalk;
