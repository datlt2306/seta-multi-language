/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Healthcare = () => {
    const { healthcare } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${healthcare.title}`,
                        description: `${healthcare.description}`,
                        url: "https://seta-international.com/industries/healthcare/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/heathcarejpg.jpg"
                title={healthcare.title}
                description={healthcare.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2
                            className="section__title !font-light !leading-tight"
                            dangerouslySetInnerHTML={{
                                __html: healthcare.section1.title,
                            }}
                        ></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
                        {healthcare.section1.items.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[100px,1fr] md:grid-cols-[208px,1fr] gap-10 items-center"
                            >
                                <div>
                                    <img loading="lazy" src={item.thumbnailUrl} alt={item.name} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2C5282] text-xl mb-4">
                                        {item.name}
                                    </h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/heathcare-2.jpg")',
                }}
                className="bg-center section"
            >
                <h4
                    className="text-white text-3xl md:text-5xl text-center !leading-tight"
                    dangerouslySetInnerHTML={{
                        __html: healthcare.section2.title,
                    }}
                ></h4>
            </div>
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{healthcare.stories.title}</h2>
                        <p className="section__desc">{healthcare.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {healthcare.stories.items.map((item, index) => (
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

export default Healthcare;
