/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import Seo from "@/common/seo";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";

const BannerCulture = dynamic(() => import("@/common/components/BannerCulture"));
const SlideEmployees = dynamic(() => import("@/common/components/SlideEmployees"));
const SlideCustomers = dynamic(() => import("@/common/components/SlideCustomers"));
const SlideOurPeople = dynamic(() => import("@/common/components/SlideOurPeople"));

const CulturePage = () => {
    const { culture } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "SETA International's working culture",
                        description:
                            "Culture is always a major component of the SETA's success. At SETA, our working environment makes the employees comfortable, and in turn motivates them to carry out tasks in the best ways possible for our clients. Here is how we make it happen.",
                        url: "https://seta-international.com/about/culture/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <div className="relative">
                <BannerCulture banner={culture.banner} />
                <div className="absolute inset-x-0 z-10 top-1/2 transform -translate-y-1/2 mt-8" />
            </div>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <img
                                src={culture.articles[0].thumbnailUrl}
                                alt={culture.articles[0].name}
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold mt-4 mb-4 md:mt-0 text-xl text-[#2A4365] uppercase">
                                {culture.articles[0].name}
                            </h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: culture.articles[0].content,
                                }}
                            ></p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div className="order-2 md:order-1">
                            <h4
                                className="font-semibold mt-4 mb-4 md:mt-0 text-xl text-[#2A4365] uppercase"
                                dangerouslySetInnerHTML={{
                                    __html: culture.articles[1].name,
                                }}
                            ></h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: culture.articles[1].content,
                                }}
                            ></p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src={culture.articles[1].thumbnailUrl}
                                alt={culture.articles[1].name}
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <img
                                src={culture.articles[2].thumbnailUrl}
                                alt={culture.articles[2].name}
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold mt-4 mb-4 md:mt-0 text-xl text-[#2A4365] uppercase">
                                {culture.articles[2].name}
                            </h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: culture.articles[2].content,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section"
                style={{
                    backgroundImage:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture-2.jpg")',
                }}
            >
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                        {culture.list.map((culture, index) => (
                            <div className="text-center" key={index}>
                                <img
                                    loading="lazy"
                                    src={`${culture.img}`}
                                    alt={`${culture.name}`}
                                    className="mx-auto mb-3 w-1/2 md:w-auto"
                                />
                                <span className="text-white uppercase text-lg">{culture.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section about-page">
                <div className="max-w-7xl mx-auto px-5 relative mb-12">
                    <div className="text-center pb-10">
                        <h2 className="section__subtitle mb-3">{culture.employee.title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: culture.employee.description,
                            }}
                        ></p>
                    </div>
                    <SlideEmployees employees={culture.employee.items} />
                </div>
                <div className="max-w-7xl mx-auto px-5 relative mb-12">
                    <div className="text-center pb-10">
                        <h2
                            className="section__subtitle mb-3"
                            dangerouslySetInnerHTML={{
                                __html: culture.customer.title,
                            }}
                        ></h2>
                        <p>{culture.customer.description}</p>
                    </div>
                    <SlideCustomers customers={culture.customer.items} />
                </div>
                <div className="max-w-7xl mx-auto px-5 relative">
                    <div className="text-center pb-10">
                        <h2 className="section__subtitle">{culture.peoplevoices.title}</h2>
                    </div>
                    <SlideOurPeople ourPeople={culture.peoplevoices.items} />
                </div>
            </section>
        </>
    );
};

export default CulturePage;
