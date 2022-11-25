/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Automotive = () => {
    const { automotive, btn } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${automotive.title}`,
                        description: `${automotive.description}`,
                        url: "https://seta-international.com/industries/automotive/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/automotive.jpg"
                title={automotive.title}
                description={automotive.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{automotive.section1.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 mb-6">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/automotive/1.jpg"
                                alt="The Road to a New World of Mobility"
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div
                            className="text-[#2A4365] leading-7"
                            dangerouslySetInnerHTML={{
                                __html: automotive.section1.content1,
                            }}
                        ></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[5fr,4fr] gap-8">
                        <div
                            className="text-[#2A4365] leading-7 order-2 md:order-1"
                            dangerouslySetInnerHTML={{
                                __html: automotive.section1.content2,
                            }}
                        ></div>
                        <div className="order-1 md:order-2">
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/automotive/2.jpg"
                                alt="Automotive"
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-16 pb-24">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{automotive.section2.title}</h2>
                    </div>
                    <div>
                        <div>{automotive.section2.description}</div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {automotive.section2.items.map((item, index) => (
                                <div className="text-center" key={index}>
                                    <div className="h-60 flex items-center justify-center">
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.name}
                                        />
                                    </div>
                                    <h5 className="text-[#2A4365] font-bold">{item.name}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section bg-fixed"
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/automotive-2.jpg")',
                }}
            >
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="font-semibold text-white text-5xl mb-4">
                            {automotive.section3.title}
                        </h2>
                    </div>
                    <div>
                        <p
                            className="text-white leading-7"
                            dangerouslySetInnerHTML={{
                                __html: automotive.section3.description,
                            }}
                        ></p>
                    </div>
                </div>
            </section>
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{automotive.stories.title}</h2>
                        <p className="section__desc">{automotive.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="order-2 md:order-1">
                            <Link href={automotive.stories.items[0].path}>
                                <a>
                                    <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl pb-3">
                                        {automotive.stories.items[0].name}
                                    </h3>
                                    <p className="text-[#2A4365] text-lg my-10">
                                        {automotive.stories.items[0].content}
                                    </p>
                                </a>
                            </Link>
                            <Link href={automotive.stories.items[0].path}>
                                <a className="text-[#4299E1] block hover:text-[#E53E3E] inline-block py-4 px-6 border border-[#4299E1] rounded-md hover:border-[#E53E3E]">
                                    {btn.viewMore}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        className="inline-block"
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
                                    src={automotive.stories.items[0].thumbnailUrl}
                                    alt={automotive.stories.items[0].name}
                                    className="w-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Automotive;
