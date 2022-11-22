/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ViewMoreIcon from "@/common/components/Icons/Viewmore";
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const CaseStudiesPage = () => {
    const { caseStudy } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "The SETA Case Studies",
                        description:
                            "SETA International delivers world-class services in Digital Platform, AI Solution, Smart City, IoT, AR/VR and more. Check out our customer success stories to see how SETA International helps them surmount business challenges and achieve favorable outcomes.",
                        url: "https://seta-international.com/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/web.svg"
                imageTwo="banner/case-study.svg"
                title={caseStudy.title}
                description={caseStudy.description}
            />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{caseStudy.sectionOne.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div className="order-2 md:order-1">
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href={caseStudy.sectionOne.items[0].path}>
                                    {caseStudy.sectionOne.items[0].name}
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {caseStudy.sectionOne.items[0].content}
                            </p>
                            <Link href={caseStudy.sectionOne.items[0].path}>
                                <a className="case-study__btn">
                                    View more
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <Link href={caseStudy.sectionOne.items[0].path}>
                                <img
                                    loading="lazy"
                                    src={caseStudy.sectionOne.items[0].thumbnailUrl}
                                    alt={caseStudy.sectionOne.items[0].name}
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div>
                            <Link href={caseStudy.sectionOne.items[1].path}>
                                <img
                                    loading="lazy"
                                    src={caseStudy.sectionOne.items[1].thumbnailUrl}
                                    alt={caseStudy.sectionOne.items[1].name}
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                        <div>
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href={caseStudy.sectionOne.items[1].path}>
                                    {caseStudy.sectionOne.items[1].name}
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {caseStudy.sectionOne.items[1].content}
                            </p>
                            <Link href={caseStudy.sectionOne.items[1].path}>
                                <a className="case-study__btn">
                                    View more
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div className="order-2 md:order-1">
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href={caseStudy.sectionOne.items[2].path}>
                                    <a className="uppercase">
                                        {caseStudy.sectionOne.items[2].name}
                                    </a>
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {caseStudy.sectionOne.items[2].content}
                            </p>
                            <Link href={caseStudy.sectionOne.items[2].path}>
                                <a className="case-study__btn">
                                    View more
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <Link href={caseStudy.sectionOne.items[2].path}>
                                <img
                                    loading="lazy"
                                    src={caseStudy.sectionOne.items[2].thumbnailUrl}
                                    alt={caseStudy.sectionOne.items[2].name}
                                    className="mx-auto w-full object-cover"
                                    style={{ height: 400 }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div>
                            <Link href={caseStudy.sectionOne.items[3].path}>
                                <img
                                    loading="lazy"
                                    src={caseStudy.sectionOne.items[3].thumbnailUrl}
                                    alt={caseStudy.sectionOne.items[3].name}
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                        <div>
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href={caseStudy.sectionOne.items[3].path}>
                                    {caseStudy.sectionOne.items[3].name}
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                {caseStudy.sectionOne.items[3].content}
                            </p>
                            <Link href={caseStudy.sectionOne.items[3].path}>
                                <a className="case-study__btn">
                                    View more
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/case-study.jpg"
                alt="Banner"
                className="w-full object-cover"
            />
            {/*End .services*/}
            <div className="bg-white py-20 order-t border-gray-200 border-b">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                        <div>
                            <Link href="/case-study/beauty-encounter">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg"
                                        alt="Beauty Encounter"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Beauty Encounter
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/medtalk">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/7.png"
                                        alt="Med Talk"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Med Talk
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/sk-planet">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg"
                                        alt="SK Planet"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        SK Planet
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/avia">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg"
                                        alt="Avia"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Avia
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/motion-global">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg"
                                        alt="Motion Global"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Motion Global
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/toll-roads">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/4.jpg"
                                        alt="The Toll Roads"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        The Toll Roads
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/syspro">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/3.jpg"
                                        alt="SysPro"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        SysPro
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/trend-micro">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg"
                                        alt="Trend Micro"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Trend Micro
                                    </h4>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/ujazo">
                                <a className="block h-full">
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/7.jpg"
                                        alt="Ujazo"
                                        className="h-40 md:h-60 object-cover w-full"
                                    />
                                    <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                        Ujazo
                                    </h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudiesPage;
