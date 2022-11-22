/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const ResearchDevelopment = () => {
    const {
        services: { ecommerces },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${ecommerces.title}`,
                        description: `${ecommerces.description}`,
                        url: "https://seta-international.com/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/e-commerce.jpg"
                title={ecommerces.title}
                description={ecommerces.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-[#2A4365] text-4xl mb-10">
                                {ecommerces.article.title}
                            </h4>
                            <p className="text-lg mb-4">{ecommerces.article.content}</p>
                        </div>
                        <div>
                            <img src={ecommerces.article.img} />
                        </div>
                    </div>
                </div>
            </section>
            <div
                style={{
                    background:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/2.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center h-full py-32"></div>
            </div>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{ecommerces.service.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {ecommerces.service.items.map((item, index) => (
                            <div key={index} className="text-center">
                                <img src={item.img} className="mx-auto" />
                                <span className="block mt-10 text-lg">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{ecommerces.stories.title}</h2>
                    </div>
                    <div>
                        <img src="https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/7.jpg" />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: ecommerces.stories.content,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResearchDevelopment;
