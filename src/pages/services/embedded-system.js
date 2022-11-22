/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const EmbeddedSystemPage = () => {
    const {
        btn,
        services: { embedded },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Embeded Solution Service",
                        description:
                            "Industry is changing. Businesses are digitizing and networking systems across all sectors – and making these systems as autonomous as possible. While the opportunities and potential of this transformation are great, it also leads to ever-increasing functional safety requirements.",
                        url: "https://seta-international.com/services/embedded-system/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/embedded-system.jpg"
                title="Embeded Solution Service"
                description="Industry is changing. Businesses are digitizing and networking systems
                across all sectors – and making these systems as autonomous as possible.
                While the opportunities and potential of this transformation are great,
                it also leads to ever-increasing functional safety requirements."
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{embedded.offer.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {embedded.offer.items.map((item, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    src={item.img}
                                    alt="SETA Embedded System"
                                    className="mx-auto w-full object-cover"
                                />
                                <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                    {item.name}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/embedded-system-2.jpg"
                alt="SETA Embedded System"
                className="w-full object-cover"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{embedded.works.title}</h2>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                            <div className="lg:mt-14">
                                <div>
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/1.svg"
                                            alt="SETA Embedded System"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="SETA Embedded System"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                        {embedded.works.items[0].name}
                                    </h4>
                                    <p className="text-sm text-[#0077CB]">
                                        {embedded.works.items[0].content}
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
                                            alt="SETA Embedded System"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="SETA Embedded System"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                </div>
                                <div className="text-center order-1 flex flex-wrap">
                                    <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                        {embedded.works.items[1].name}
                                    </h4>
                                    <p className="order-1 text-sm text-[#0077CB]">
                                        {embedded.works.items[1].content}
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mt-14">
                                <div>
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/legacy/3.svg"
                                            alt="SETA Embedded System"
                                            className="mx-auto"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/how-it-work/arrow.svg"
                                            alt="SETA Embedded System"
                                            className="transform -translate-y-1/2 absolute top-1/2 left-[98%] hidden xl:block"
                                        />
                                    </div>
                                    <div className="hidden lg:block border-r-2 border-[#0077CB] h-14 mx-auto w-2 -mt-5" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#0077CB] text-xl my-2">
                                        {embedded.works.items[2].name}
                                    </h4>
                                    <p className="text-sm text-[#0077CB]">
                                        {embedded.works.items[2].content}
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
                                            alt="SETA Embedded System"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="text-center order-1 flex flex-wrap">
                                    <h4 className="order-2 w-full font-bold text-[#0077CB] text-xl my-2">
                                        {embedded.works.items[3].name}
                                    </h4>
                                    <p className="order-1 text-sm text-[#0077CB]">
                                        {embedded.works.items[3].content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End .services*/}
            <section className="bg-gray-100 section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">Our Success Stories</h2>
                        <p className="section__desc">
                            Success is no easy accomplishment, but with a trusted partner and an
                            effective collaboration, success comes to you without harsh tries. With
                            us!
                        </p>
                    </div>
                    {embedded.stories.items.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8">
                            <div className="order-2 md:order-1">
                                <Link href={item.path}>
                                    <a>
                                        <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl pb-3">
                                            {item.name}
                                        </h3>
                                        <p className="text-[#2A4365] text-lg my-10">
                                            {item.content}
                                        </p>
                                    </a>
                                </Link>
                                <Link href={item.path}>
                                    <a className="text-[#4299E1] block hover:text-[#E53E3E] inline-block py-4 px-6 border border-[#4299E1] rounded-md hover:border-[#E53E3E]">
                                        {btn.viewMore}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            className="inline-block ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="order-1 md:order-2">
                                <Link href="/case-study/aeris">
                                    <img
                                        loading="lazy"
                                        src={item.thumbnail}
                                        alt="SETA Embedded System"
                                        className="w-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default EmbeddedSystemPage;
