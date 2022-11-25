/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Iot = () => {
    const { iot } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${iot.title}`,
                        description: `${iot.description}`,
                        url: "https://seta-international.com/next-gen/iot/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/next-gen/ai.jpg"
                title={iot.title}
                description={iot.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="responsive-iframe">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            height={615}
                            src="https://www.youtube.com/embed/CfL-HRAKSUw"
                            title="SETA IOT"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="text-center pb-10">
                        <h2 className="section__title">{iot.why.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {iot.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="mb-5">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt="Certified experienced developers"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-[#2C5282] text-xl mb-4 lg:mt-0 text-center">
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
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/next-gen/iot-2.jpg"
                alt="Iot"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">{iot.stories.title}</h2>
                        <p className="section__desc">{iot.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        {iot.stories.items.map((item, index) => (
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

export default Iot;
