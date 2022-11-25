/* eslint-disable @next/next/no-img-element */
import ViewMoreIcon from "@/common/components/Icons/Viewmore";
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SapPage = () => {
    const {
        btn,
        services: { sap },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${sap.title}`,
                        description: `${sap.description}`,
                        url: "https://seta-international.com/services/enterprise/sap/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner image="banner/sap.jpg" title={sap.title} description={sap.description} />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                        {sap.items.map((item, index) => (
                            <div key={index}>
                                <Link href={item.path}>
                                    <a className="relative">
                                        <Image
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt="SAP Implementation Service"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            width={654}
                                            height={389}
                                            layout="responsive"
                                        />
                                        <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                            {item.name}
                                        </h3>
                                        <p>{item.content}</p>
                                    </a>
                                </Link>
                                <Link href={item.path}>
                                    <a className="case-study__btn">
                                        {btn.viewMore}
                                        <ViewMoreIcon />
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{sap.stories.title}</h2>
                        <p className="section__desc">{sap.stories.description}</p>
                    </div>
                    {sap.stories.items.map((item, index) => (
                        <div className="grid md:grid-cols-2 gap-12 mb-10" key={index}>
                            <div>
                                <Link href={item.path}>
                                    <Image
                                        loading="lazy"
                                        src={item.thumbnailUrl}
                                        alt="Stelux"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                        layout="responsive"
                                        width={688}
                                        height={435}
                                    />
                                </Link>
                            </div>
                            <div>
                                <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                    <Link href={item.path}>
                                        <a>{item.name} </a>
                                    </Link>
                                </h3>
                                <p className="text-lg text-[#2A4365]">{item.description}</p>
                                <Link href={item.path}>
                                    <a className="case-study__btn">
                                        {btn.viewMore}
                                        <ViewMoreIcon />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SapPage;
