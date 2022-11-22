/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));

const TestingPage = () => {
    const {
        btn,
        services: { testing },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Testing Service",
                        description:
                            "SETA International’s testing services aim to help you avoid any potential damages that can result in a fallout costing you both hard-won users and profits.",
                        url: "https://seta-international.com/services/testing/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/migration.jpg"
                title={testing.title}
                description={testing.description}
            />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{testing.offer.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testing.offer.items.map((item, index) => (
                            <div key={index}>
                                <Image
                                    loading="lazy"
                                    src={item.img}
                                    alt={item.name}
                                    className="mx-auto w-full object-cover"
                                    layout="responsive"
                                    width={328}
                                    height={218}
                                />
                                <h3 className="font-bold text-[#2C5282] text-xl my-6">
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
                alt={testing.title}
                className="w-full object-cover"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{testing.works.title}</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-start">
                        <div className="lg:mt-12">
                            <div>
                                <div className="relative">
                                    <Image
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/testing/1.svg"
                                        alt={testing.works.title}
                                        className="mx-auto"
                                        layout="responsive"
                                        width={264}
                                        height={264}
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                        alt={testing.works.title}
                                        className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block w-[60px]"
                                    />
                                </div>
                                <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                    {testing.works.items[0].name}
                                </h4>
                                <p className="text-sm text-[#0077CB]">
                                    {testing.works.items[0].content}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="order-2">
                                <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mb-5" />
                                <div className="relative">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/testing/2.svg"
                                        alt={testing.works.items[1].name}
                                        className="mx-auto"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                        alt={testing.works.items[1].name}
                                        className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block w-[60px]"
                                    />
                                </div>
                            </div>
                            <div className="text-center order-1 flex flex-wrap">
                                <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                    {testing.works.items[1].name}
                                </h4>
                                <p className="order-1 text-sm text-[#0077CB]">
                                    {testing.works.items[1].content}
                                </p>
                            </div>
                        </div>
                        <div className="lg:mt-12">
                            <div>
                                <div className="relative">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/testing/3.svg"
                                        alt={testing.works.items[2].name}
                                        className="mx-auto"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                        alt={testing.works.items[2].name}
                                        className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block w-[60px]"
                                    />
                                </div>
                                <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                    {testing.works.items[2].name}
                                </h4>
                                <p className="text-sm text-[#0077CB]">
                                    {testing.works.items[2].content}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <div className="order-2">
                                <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mb-5" />
                                <div className="relative">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/testing/4.svg"
                                        alt={testing.works.items[3].name}
                                        className="mx-auto"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                        alt={testing.works.items[3].name}
                                        className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block w-[60px]"
                                    />
                                </div>
                            </div>
                            <div className="text-center order-1 flex flex-wrap">
                                <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                    {testing.works.items[3].name}
                                </h4>
                                <p className="order-1 text-sm text-[#0077CB]">
                                    {testing.works.items[3].content}
                                </p>
                            </div>
                        </div>
                        <div className="lg:mt-12">
                            <div>
                                <div className="relative">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/testing/5.svg"
                                        alt={testing.works.items[4].name}
                                        className="mx-auto"
                                    />
                                </div>
                                <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                    {testing.works.items[4].name}
                                </h4>
                                <p className="text-sm text-[#0077CB]">
                                    {testing.works.items[4].content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End .services*/}
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{testing.stories.title}</h2>
                        <p className="section__desc">{testing.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testing.stories.items.map((item, index) => (
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

export default TestingPage;
