/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const DevelopmentProcess = dynamic(() => import("@/common/components/DevelopmentProcess"));
const MobileDevelopmentPage = () => {
    const {
        services: { mobile },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${mobile.title}`,
                        description: `${mobile.description}`,
                        url: "hhttps://seta-international.com/services/mobile-application-development/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/mobile.svg"
                title={mobile.title}
                description={mobile.description}
            />
            <DevelopmentProcess data={mobile.process.items} title={mobile.process.title} />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{mobile.stories.title}</h2>
                        <p className="section__desc">{mobile.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {mobile.stories.items.map((item, index) => (
                            <div>
                                <Link href="/case-study/toll-roads">
                                    <a>
                                        <Image
                                            loading="lazy"
                                            src={item.thumbnailUrl}
                                            alt={item.name}
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
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

export default MobileDevelopmentPage;
