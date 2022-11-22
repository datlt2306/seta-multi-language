/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Automotive = () => {
    const { energy, btn } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Energy Industry",
                        description:
                            "We have services to match your business needs, from energy and sustainability advice to managing the lifecycle of your assets",
                        url: "https://seta-international.com/industries/energy/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/energy.jpg"
                title="Energy Industry"
                description="We have services to match your business needs, from energy and sustainability advice to managing the lifecycle of your assets"
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{energy.section1.title}</h2>
                        <p className="section__desc">{energy.section1.description}</p>
                    </div>
                    <div className="my-20">
                        <img
                            loading="lazy"
                            srcSet="https://da8pk1kbkdsqo.cloudfront.net/images/energy/1.jpg 1.5x"
                            alt="The Road to a New World of Mobility"
                            className="mx-auto ` object-cover"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[5fr,4fr] gap-8 mb-10">
                        <div className="text-[#2A4365] leading-7">
                            <h4 className="font-bold text-[#2C5282] text-xl mb-4 uppercase">
                                {energy.section1.items[0].title}
                            </h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: energy.section1.items[0].content,
                                }}
                            ></p>
                        </div>
                        <div className="">
                            <img
                                loading="lazy"
                                src={energy.section1.items[0].thumbnailUrl}
                                alt={energy.section1.items[0].name}
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[5fr,4fr] gap-8 mb-10">
                        <div className="order-2 md:order-1">
                            <img
                                loading="lazy"
                                src={energy.section1.items[1].thumbnailUrl}
                                alt={energy.section1.items[1].name}
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div className="text-[#2A4365] leading-7 order-1 md:order-2">
                            <h4 className="font-bold text-[#2C5282] text-xl mb-4  uppercase">
                                {energy.section1.items[1].name}
                            </h4>
                            <p
                                className="mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: energy.section1.items[1].content,
                                }}
                            ></p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[5fr,4fr] gap-8 mb-10">
                        <div className="text-[#2A4365] leading-7">
                            <h4 className="font-bold text-[#2C5282] text-xl mb-4  uppercase">
                                {energy.section1.items[2].name}
                            </h4>
                            <p
                                className="mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: energy.section1.items[2].content,
                                }}
                            ></p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={energy.section1.items[2].thumbnailUrl}
                                alt={energy.section1.items[2].name}
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[5fr,4fr] gap-8 mb-10">
                        <div className=" order-2 md:order-1">
                            <img
                                loading="lazy"
                                src={energy.section1.items[3].thumbnailUrl}
                                alt={energy.section1.items[3].name}
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div className="text-[#2A4365] leading-7  order-1 md:order-2">
                            <h4 className="font-bold text-[#2C5282] text-xl mb-4  uppercase">
                                Mitigate Power Outage
                            </h4>
                            <p
                                className="mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: energy.section1.items[3].content,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section !py-20"
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/energy/6.jpg")',
                }}
            >
                <div className="max-w-5xl mx-auto px-5 text-center">
                    <div className="text-center pb-10">
                        <h2 className="font-light uppercase text-white text-5xl mb-4">
                            {energy.section2.title}
                        </h2>
                    </div>
                    <div>
                        <p className="text-white leading-7">{energy.section2.description}</p>
                    </div>
                </div>
            </section>
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{energy.stories.title}</h2>
                        <p className="section__desc">{energy.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="order-2 md:order-1">
                            <Link href={energy.stories.items[0].path}>
                                <a>
                                    <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl pb-3">
                                        {energy.stories.items[0].name}
                                    </h3>
                                    <p className="text-[#2A4365] text-lg my-10">
                                        {energy.stories.items[0].content}
                                    </p>
                                </a>
                            </Link>
                            <Link href={energy.stories.items[0].path}>
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
                                    src={energy.stories.items[0].thumbnailUrl}
                                    alt={energy.stories.items[0].name}
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
