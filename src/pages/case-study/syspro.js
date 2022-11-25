/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));

const Syspro = () => {
    const { syspro } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${syspro.title}`,
                        description: `${syspro.description}`,
                        url: "https://seta-international.com/case-study/syspro/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={syspro.title} description={syspro.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            loading="lazy"
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/4.jpg"
                            alt="SysPro"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {syspro.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {syspro.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={syspro.challenge.thumbnailUrl}
                                alt={syspro.challenge.title}
                                className="mx-auto w-8/12"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/bgSolution.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{syspro.solution.title}</h2>
                    <p className="text-white text-lg mt-5">
                        {syspro.solution.description}
                        <br />
                        <br />
                        <Link href="https://asia.syspro.com/product/erp-software/">
                            See https://asia.syspro.com/product/erp-software/
                        </Link>
                    </p>
                </div>
            </div>
            <section>
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center py-24">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/5.jpg"
                                alt="Syspro"
                            />
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/6.jpg"
                                alt="Syspro"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Syspro;
