/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const LegacyMigrationPage = () => {
    const {
        services: { legacy },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${legacy.title}`,
                        description: `${legacy.description}`,
                        url: "https://seta-international.com/services/legacy-migration/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/migration.jpg"
                title={legacy.title}
                description={legacy.description}
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{legacy.offer.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {legacy.offer.items.map((item, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    src={item.thumbnailUrl}
                                    alt="Legacy Software Migration"
                                    className="mx-auto w-full object-cover"
                                />
                                <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                    {item.name}
                                </h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/migration-2.jpg"
                alt="Legacy Software Migration"
                className="w-full object-cover"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{legacy.works.title}</h2>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                            <div className="lg:mt-14">
                                <div>
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/1.svg"
                                            alt="Legacy Software Migration"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="Legacy Software Migration"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                        {legacy.works.items[0].name}
                                    </h4>
                                    <p className="text-sm text-[#0077CB]">
                                        {legacy.works.items[0].content}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="order-2">
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mb-5" />
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/2.svg"
                                            alt="Legacy Software Migration"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="Legacy Software Migration"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                </div>
                                <div className="text-center order-1 flex flex-wrap">
                                    <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                        {legacy.works.items[1].name}
                                    </h4>
                                    <p className="order-1 text-sm text-[#0077CB]">
                                        {legacy.works.items[1].content}
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mt-14">
                                <div>
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/3.svg"
                                            alt="Legacy Software Migration"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="Legacy Software Migration"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                        {legacy.works.items[2].name}
                                    </h4>
                                    <p className="text-sm text-[#0077CB]">
                                        {legacy.works.items[2].content}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="order-2">
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mb-5" />
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/4.svg"
                                            alt="Legacy Software Migration"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="text-center order-1 flex flex-wrap">
                                    <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                        {legacy.works.items[3].name}
                                    </h4>
                                    <p className="order-1 text-sm text-[#0077CB]">
                                        {legacy.works.items[3].content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End .services*/}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{legacy.stories.title}</h2>
                        <p className="section__desc">{legacy.stories.description}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {legacy.stories.items.map((item, index) => (
                            <div key={index}>
                                <Link href={item.path}>
                                    <a>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt="Legacy Software Migration"
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

export default LegacyMigrationPage;
