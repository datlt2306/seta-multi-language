/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Security = () => {
    const { security } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Security Industry",
                        description:
                            "Wherever your business goes, whoever it works with, you need cybersecurity that covers it all",
                        url: "https://seta-international.com/industries/security/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/security.jpg"
                title="Security Industry"
                description="Wherever your business goes, whoever it works with, you need
                cybersecurity that covers it all"
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title !font-light !leading-tight">
                            {security.sectionOne.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 mb-10 items-center">
                        <div className="text-[#2A4365] leading-7">
                            <p
                                className="mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: security.sectionOne.content,
                                }}
                            ></p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={security.sectionOne.thumbnailUrl}
                                alt={security.sectionOne.title}
                                className="mx-auto w-8/12"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/security-2.jpg"
                alt="Our Success Stories"
                className="w-full object-cover"
                height="450px"
            />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{security.stories.title}</h2>
                        <p className="section__desc">{security.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Link href="/case-study/trend-micro">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg"
                                        alt="Trend Micro"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        Trend Micro
                                    </h3>
                                    <p>
                                        As a global leader in cloud security, Trend Micro develops
                                        Internet content security and threat management solutions
                                        that make the world safe for businesses and consumers to
                                        exchange digital information. With more than 20 years of
                                        experience, Trend Micro is recognized as the market leader
                                        in server security for delivering top-ranked client, server,
                                        and cloud-based security solutions that stop threats faster
                                        and protect data in physical, virtualized, and cloud
                                        environments.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/veritone">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg"
                                        alt="Veritone"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        Veritone
                                    </h3>
                                    <p>
                                        Veritone is one of top AI companies focusing on
                                        democratizing AI and enabling every organization and every
                                        person with the power of AI. What started in 2014 with the
                                        idea of providing unified access to hundreds of cognitive
                                        engines through one common software infrastructure, evolved
                                        to the world’s first AI operating system, aiWARE, which
                                        orchestrates a diverse ecosystem of cognitive engines to
                                        power intelligent automation for both commercial and
                                        government organizations.
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

export default Security;
