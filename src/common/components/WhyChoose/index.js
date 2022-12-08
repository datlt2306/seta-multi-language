/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React from "react";

const WhyChoose = () => {
    const {
        home: { reason },
    } = useTrans();
    return (
        <section className="why bg-[#072155] relative bg-center section overflow-hidden">
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner-why.svg"
                alt="Why SETA International?"
                className="transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
            />
            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="text-center pb-10">
                    <h2 className="!text-white section__title">{reason.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 lg:gap-x-44 lg:gap-y-12">
                    {reason.items.map((item, index) => (
                        <div key={index}>
                            <div className="md:inline-block border-b-4 border-yellow-400 mb-6 pb-2">
                                {item.path ? (
                                    <Link href={item.path}>
                                        <a>
                                            <span className="opacity-70 text-white text-4xl lg:text-7xl font-thin">
                                                {index + 1}
                                            </span>
                                            <span
                                                className="inline-block ml-4 font-semibold text-xl lg:text-4xl text-white uppercase"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.name,
                                                }}
                                            ></span>
                                        </a>
                                    </Link>
                                ) : (
                                    <>
                                        <span className="opacity-70 text-white text-4xl lg:text-7xl font-thin">
                                            {index + 1}
                                        </span>
                                        <span
                                            className="inline-block ml-4 font-semibold text-xl lg:text-4xl text-white uppercase"
                                            dangerouslySetInnerHTML={{
                                                __html: item.name,
                                            }}
                                        ></span>
                                    </>
                                )}
                            </div>
                            <p className="text-white lg:text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
