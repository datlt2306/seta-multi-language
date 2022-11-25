/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Banner = dynamic(() => import("@/common/components/Banner"));
const DevelopmentProcess = dynamic(() => import("@/common/components/DevelopmentProcess"));
const WebDevelopmentPage = () => {
    const {
        services: { web },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${web.title}`,
                        description: `${web.description}`,
                        url: "https://seta-international.com/services/web-application-development/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/web.svg"
                imageTwo="web-app.svg"
                title={web.title}
                description={web.description}
            />
            <DevelopmentProcess data={web.process.items} title={web.process.title} />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{web.stories.title}</h2>
                        <p className="section__desc"> {web.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {web.stories.items.map((item) => (
                            <div>
                                <Link href="/case-study/restaurant">
                                    <a>
                                        <div className="relative">
                                            <Image
                                                loading="lazy"
                                                src={item.thumbnailUrl}
                                                alt={item.name}
                                                className="mx-auto w-full object-cover h-60 lg:h-96"
                                                layout="responsive"
                                                width={200}
                                                height={130}
                                            />
                                        </div>
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

export default WebDevelopmentPage;
