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
                        title: "Transportation & Logistics Industry",
                        description:
                            "SETA International helps carriers, freight forwarders, and logistics companies as well as digital solutions vendors navigate the road to cost-efficient technologies. Relying on our logistics software development services, you can optimize delivery routes, cut fleet operational costs, minimize traffic congestion, and refine the shipping experience for customers.",
                        url: "https://seta-international.com/industries/transportation/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/finance.jpg"
                title="Transportation and Logistics Industry"
                description="SETA International helps carriers, freight forwarders, and logistics
                companies as well as digital solutions vendors navigate the road to
                cost-efficient technologies. Relying on our logistics software
                development services, you can optimize delivery routes, cut fleet
                operational costs, minimize traffic congestion, and refine the shipping
                experience for customers."
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
                        <div>
                            <Link href="/case-study/avia">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/2.jpg"
                                        alt="Avia"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">Avia</h3>
                                    <p>
                                        AVIA is a first of its kind, real time, digital charter
                                        marketplace, marrying the latest in technology with
                                        traditional boutique customer service.​AVIA proprietary
                                        technology specializes in connecting nominally priced, zero
                                        passenger, positioning flights with financially savvy
                                        passengers. These &quot;empty legs&quot; can be sold at
                                        pennies on the dollar and finally bridge the cost gap
                                        between a business class commercial flight and a true
                                        private charter experience
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/toll-roads">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg"
                                        alt="The Toll Roads"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        The Toll Roads
                                    </h3>
                                    <p>
                                        Offers One-Time-Toll payments, new FasTrak account
                                        enrollment and full FasTrak account maintenance, including
                                        vehicle changes, payments, toll history and transponder
                                        maintenance.
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Transportation;
