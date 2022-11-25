/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Ai = () => {
    const { ai } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${ai.title}`,
                        description: `${ai.description}`,
                        url: "https://seta-international.com/next-gen/ai/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/next-gen/ai-3.jpg"
                title={ai.title}
                description={ai.description}
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{ai.why.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {ai.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="flex md:h-60 lg:h-96 items-center">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt="Full life cycle of AI development"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-[#2C5282] text-xl my-6 lg:mt-0 text-center">
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
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/next-gen/ai-4.jpg"
                alt="Our Success Stories"
            />
            <section className="bg-gray-100 section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">{ai.stories.title}</h2>
                        <p className="section__desc">{ai.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        {ai.stories.items.map((item, index) => (
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

export default Ai;
