/* eslint-disable @next/next/no-img-element */
import ViewMoreIcon from "@/common/components/Icons/Viewmore";
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Arvr = () => {
    const { btn, arvr } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${arvr.title}`,
                        description: `${arvr.description}`,
                        url: "https://seta-international.com/next-gen/ar-vr/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/next-gen/ar.jpg"
                title={arvr.title}
                description={arvr.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{arvr.why.title}</h2>
                        <p className="section__desc">{arvr.why.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {arvr.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="flex md:h-60 lg:h-96 items-center">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.title}
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-[#2C5282] text-xl my-6 lg:mt-0 text-center">
                                    {item.title}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/next-gen/ar-2.jpg"
                alt="Our Success Stories"
            />
            <section className="bg-gray-100 section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">{arvr.stories.title}</h2>
                        <p className="section__desc">{arvr.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div className="order-2 md:order-1">
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href="/case-study/skplanet">
                                    <a className="uppercase">{arvr.stories.items[0].name}</a>
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {arvr.stories.items[0].content}
                            </p>
                            <Link href="/case-study/skplanet">
                                <a className="case-study__btn">
                                    {btn.viewMore}
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <Link href="/case-study/skplanet">
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg"
                                    alt="SK Planet"
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div>
                            <Link href="/case-study/motion-global">
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg"
                                    alt="Motion Global"
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                        <div>
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href="/case-study/motion-global" className="uppercase">
                                    {arvr.stories.items[1].name}
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {arvr.stories.items[1].content}
                            </p>
                            <Link href="/case-study/motion-global">
                                <a className="case-study__btn">
                                    {btn.viewMore}
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Arvr;
