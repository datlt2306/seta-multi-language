/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Veritone = () => {
    const { veritone } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${veritone.title}`,
                        description: `${veritone.description}`,
                        url: "https://seta-international.com/case-study/veritone",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={veritone.title} description={veritone.description} />

            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            width={560}
                            height={550}
                            src="https://www.youtube.com/embed/fg0q0PoENT4"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {veritone.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {veritone.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={veritone.challenge.thumbnailUrl}
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
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{veritone.solution.title}</h2>
                    <p className="text-white text-lg mt-5">{veritone.solution.description}</p>
                </div>
            </div>
            {/*End .services*/}
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-screen-custom mx-auto relative">
                    <div className="max-w-7xl px-8 mx-auto grid md:grid-cols-2 gap-12">
                        {veritone.projects.map((item, index) => (
                            <div key={index}>
                                <div className="rounded">
                                    <img loading="lazy" src={item.thumbnailUrl} alt={item.name} />
                                </div>
                                <h2 className="font-bold text-[#2C5282] text-xl my-5">
                                    {item.name}
                                </h2>
                                <p className="leading-7">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Veritone;
