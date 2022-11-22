/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";
const Banner = dynamic(() => import("@/common/components/Banner"));

const Industries = () => {
    const { industries } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Meet The Expert In Your Industries",
                        description:
                            "With over ten years and 500+ global clients, SETA International has gained extensive knowledge across many industries. Discover the best technological solution for your company by talking with our specialists.",
                        url: "https://seta-international.com/industries/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/industries.jpg"
                title="Meet The Expert In Your Industries"
                description="With over ten years and 500+ global clients, SETA International has
                gained extensive knowledge across many industries. Discover the best
                technological solution for your company by talking with our specialists."
            />
            <section className="offering section border-b">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{industries.sectionOne.title}</h2>
                        <p className="section__desc">{industries.sectionOne.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {industries.sectionOne.items.map((item, index) => (
                            <div key={index} className="relative group overflow-hidden">
                                <Link href={item.path}>
                                    <img
                                        loading="lazy"
                                        src={item.thumbnailUrl}
                                        alt={item.name}
                                        className="w-full group-hover:scale-105 transform transition duration-200 ease-in-out"
                                    />
                                </Link>
                                <h3 className="absolute bottom-3 left-3 font-bold text-white text-sm sm:text-base lg:text-lg uppercase">
                                    <Link href={item.path}>{item.name}</Link>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industries;
