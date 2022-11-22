/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const BigData = () => {
    const { bigData } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Next-Gen Technology - Big Data",
                        description:
                            "Every company, no matter big or small, needs valuable data and insights. Using Big Data has been crucial for many leading companies to outperform the competition. In many industries, new entrants and established competitors use data-driven strategies to compete, capture and innovate. SETA will help you to present data effectively, properly analyze data, and give you competitive edges over other companies.",
                        url: "https://seta-international.com/next-gen/big-data/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/bigdata/1.jpg"
                title="Big Data"
                description="Every company, no matter big or small, needs valuable data and insights.
                Using Big Data has been crucial for many leading companies to outperform
                the competition. In many industries, new entrants and established
                competitors use data-driven strategies to compete, capture and innovate.
                SETA will help you to present data effectively, properly analyze data,
                and give you competitive edges over other companies."
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{bigData.why.title}</h2>
                    </div>
                    <img
                        src="https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/1.svg"
                        alt="Why SETA Big Data"
                        className="mx-auto"
                    />
                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {bigData.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="mb-5">
                                    <img
                                        loading="lazy"
                                        src={item.thumbnailUrl}
                                        alt="Partnerships"
                                        className="mx-auto"
                                    />
                                </div>
                                <h3 className="font-bold text-[#2C5282] text-xl mb-4 lg:mt-0 text-center">
                                    {item.name}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/bigdata/2.jpg"
                alt="Our Services"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{bigData.services.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {bigData.services.items.map((item, index) => (
                            <div
                                key={index}
                                className="shadow-lg bg-[#EDF2F7] border border-l-8 border-gray-200 border-l-[#3182CE] rounded-lg px-8 py-5 grid items-center"
                            >
                                <div>
                                    <strong>{item.name}</strong>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">{bigData.stories.title}</h2>
                        <p className="section__desc">{bigData.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        {bigData.stories.items.map((item, index) => (
                            <div key={index}>
                                <Link href={item.path}>
                                    <a>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.name}
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                        />
                                        <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                            {item.name}
                                        </h3>
                                        <p>{item.content}</p>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BigData;
