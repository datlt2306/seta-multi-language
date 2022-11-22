/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Cloud = () => {
    const { cloud } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Next-Gen Technology - Cloud",
                        description:
                            " Businesses must transition to the cloud to stay relevant in today's shifting digital world and competitiveness. SETA International collaborates with companies to help them establish ways to improve conventional infrastructure, maintain it, and migrate to the cloud, no matter where they are on their cloud journey.",
                        url: "https://seta-international.com/next-gen/cloud/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/next-gen/cloud.jpg"
                title="Cloud"
                description="Businesses must transition to the cloud to stay relevant in today's
                shifting digital world and competitiveness. SETA International
                collaborates with companies to help them establish ways to improve
                conventional infrastructure, maintain it, and migrate to the cloud, no
                matter where they are on their cloud journey."
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{cloud.why.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cloud.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="mb-5">
                                    <img
                                        loading="lazy"
                                        src={item.thumbnailUrl}
                                        alt="Certified Experienced Engineers"
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
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/next-gen/cloud-2.jpg"
                alt="Our Services"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{cloud.services.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {cloud.services.items.map((item, index) => (
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
                        <h2 className="section__title">{cloud.stories.title}</h2>
                        <p className="section__desc">{cloud.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        {cloud.stories.items.map((item, index) => (
                            <div key={index}>
                                <Link href={item.path}>
                                    <a>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.name}
                                            className="mx-auto"
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

export default Cloud;
