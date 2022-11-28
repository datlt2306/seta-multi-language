/* eslint-disable @next/next/no-img-element */
import ViewMoreIcon from "@/common/components/Icons/Viewmore";
import Seo from "@/common/seo";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
import useTrans from "@/hooks/useTranslate";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SalesforcePage = () => {
    const {
        services: { saleforce },
        btn,
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${saleforce.title}`,
                        description: `${saleforce.description}`,
                        url: "https://seta-international.com/services/enterprise/salesforce/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sale-force.jpg"
                title={saleforce.title}
                description={saleforce.description}
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{saleforce.offer.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {saleforce.offer.items.map((item, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    src={item.thumbnailUrl}
                                    alt="Salesforce Consulting"
                                    className="mx-auto w-full object-cover"
                                />
                                <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                    {item.name}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/sale-force-2.jpg"
                alt="Our Success Stories"
                className="bg-top"
            />
            {/*End .services*/}
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">{saleforce.stories.title}</h2>
                        <p className="section__desc">{saleforce.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div className="order-2 md:order-1">
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href="/case-study/veritone">
                                    <a className="uppercase">{saleforce.stories.items[0].name}</a>
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {saleforce.stories.items[0].description}
                            </p>
                            <Link href="/case-study/veritone">
                                <a className="case-study__btn">
                                    {btn.viewMore}
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <Link href="/case-study/veritone">
                                <img
                                    loading="lazy"
                                    src={saleforce.stories.items[0].thumbnailUrl}
                                    alt="Veritone"
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SalesforcePage;
