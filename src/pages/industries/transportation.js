/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Transportation = () => {
    const { transportation } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${transportation.title}`,
                        description: `${transportation.description}`,
                        url: "https://seta-international.com/industries/transportation/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/finance.jpg"
                title={transportation.title}
                description={transportation.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title !font-light !leading-tight">
                            {transportation.sectionOne.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 mb-10 items-center">
                        <div className="text-[#2A4365] leading-7 text-lg leading-relaxed">
                            <p
                                className="mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: transportation.sectionOne.content,
                                }}
                            ></p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={transportation.sectionOne.thumbnailUrl}
                                alt="Technology ecosystem for transport logistics"
                                className="mx-auto w-10/12"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/transportation-2.jpg"
                alt="Our Success Stories"
                className="w-full object-cover"
                height="450px"
            />
            <section className="bg-gray-100 py-16 pb-24">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{transportation.stories.title}</h2>
                        <p className="section__desc">{transportation.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {transportation.stories.items.map((item, index) => (
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

export default Transportation;
