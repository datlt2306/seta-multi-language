/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import React, { Suspense } from "react";
import "swiper/css";

import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const Opotics = () => {
    const { eyedOptics } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${eyedOptics.title}`,
                        description: `${eyedOptics.description}`,
                        url: "https://seta-international.com/case-study/eyed-optics/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={eyedOptics.title} description={eyedOptics.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/optics/1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {eyedOptics.value.title}
                            </h2>
                            <p
                                className="text-[#2A4365] leading-7 mt-8"
                                dangerouslySetInnerHTML={{
                                    __html: eyedOptics.value.content,
                                }}
                            ></p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/optics/2.jpg"
                                alt="Challenge"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Opotics;
