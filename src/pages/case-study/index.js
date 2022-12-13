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
    const { caseStudy, btn } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${caseStudy.title}`,
                        description: `${caseStudy.description}`,
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
                                    {btn.viewMore}
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
                                    {btn.viewMore}
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
                                    {btn.viewMore}
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
                                    {btn.viewMore}
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
                        {caseStudy.sectionTwo.items.map((item, index) => (
                            <div>
                                <Link href={item.path}>
                                    <a className="block h-full">
                                        <img
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.name}
                                            className="h-40 md:h-60 object-cover w-full"
                                        />
                                        <h4 className="text-[#2C5282] hover:text-[#E53E3E] text-xl my-4 uppercase">
                                            {item.name}
                                        </h4>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudiesPage;
