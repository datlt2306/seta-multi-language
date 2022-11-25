/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Retail = () => {
    const { retail } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${retail.title}`,
                        description: `${retail.description}`,
                        url: "https://seta-international.com/industries/retail/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/retail.jpg"
                title={retail.title}
                description={retail.description}
            />

            <section className="section bg-white">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2
                            className="section__title !font-light !leading-tight"
                            dangerouslySetInnerHTML={{
                                __html: retail.sectionOne.title,
                            }}
                        ></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 items-center mb-20">
                        <div className="text-[#2A4365] leading-7">
                            <ul
                                className="list-disc list-inside"
                                dangerouslySetInnerHTML={{
                                    __html: retail.sectionOne.items[0].content,
                                }}
                            ></ul>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={retail.sectionOne.items[0].thumbnailUrl}
                                alt=" When may you need retail software development services?"
                                className="mx-auto w-8/12"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 mb-10 items-center">
                        <div>
                            <img
                                loading="lazy"
                                src={retail.sectionOne.items[1].thumbnailUrl}
                                alt="SETA International is here to help you tackle these challenges"
                                className="mx-auto w-8/12"
                            />
                        </div>
                        <div
                            className="text-[#2A4365] leading-7"
                            dangerouslySetInnerHTML={{
                                __html: retail.sectionOne.items[1].content,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/retail-2.jpg"
                alt="Our Success Stories"
                className="w-full object-cover"
                height="450px"
            />
            <section className="bg-gray-100 py-16 pb-24">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{retail.stories.title}</h2>
                        <p className="section__desc">{retail.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {retail.stories.items.map((item, index) => (
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

export default Retail;
