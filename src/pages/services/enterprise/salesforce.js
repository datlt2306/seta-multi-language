/* eslint-disable @next/next/no-img-element */
import ViewMoreIcon from "@/common/components/Icons/Viewmore";
import Seo from "@/common/seo";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SalesforcePage = () => {
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Salesforce Service",
                        description:
                            "We assist customers from all around the world in determining the fittest Salesforce solutions and feature combination for driving business transformation. We develop the proper method and combination of middleware and APIs to integrate these solutions with on-premises applications using our extensive engineering knowledge.",
                        url: "https://seta-international.com/services/enterprise/salesforce/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sale-force.jpg"
                title="Salesforce Service"
                description="We assist customers from all around the world in determining the fittest
                Salesforce solutions and feature combination for driving business
                transformation. We develop the proper method and combination of
                middleware and APIs to integrate these solutions with on-premises
                applications using our extensive engineering knowledge."
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">What We Offer?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/1.jpg"
                                alt="Salesforce Consulting"
                                className="mx-auto w-full object-cover"
                            />
                            <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                Salesforce Consulting
                            </h3>
                            <p>
                                Get the most out of your Salesforce investment. Our agile strategy
                                allows you to work with local experts and benefit from our worldwide
                                delivery knowledge. We can provide the right resources for your
                                business transformation goals, regardless of your sector or project
                                size.
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/2.jpg"
                                alt="Salesforce Custom Development"
                                className="mx-auto w-full object-cover"
                            />
                            <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                Salesforce Custom Development
                            </h3>
                            <p>
                                With our highly skilled development team&apos;s experience, we can
                                take your Salesforce platform to the next level.
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/3.jpg"
                                alt="Salesforce Integration"
                                className="mx-auto w-full object-cover"
                            />
                            <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                Salesforce Integration
                            </h3>
                            <p>
                                Integrate Salesforce to your existing infrastructure in a more
                                efficient manner. Our specialists know how to connect your services
                                the best manner possible, whether it&apos;s through middleware or
                                direct connections. To future-proof your business, build and execute
                                integration processes the proper way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/sale-force-2.jpg"
                alt="Our Success Stories"
                className="bg-top"
            />
            {/*End .services*/}
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-16">
                        <h2 className="section__title">Our Success Stories</h2>
                        <p className="section__desc">
                            Success is no easy accomplishment, but with a trusted partner and an
                            effective collaboration, success comes to you without harsh tries. With
                            us!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                        <div className="order-2 md:order-1">
                            <h3 className="inline-block border-b border-[#2C5282] text-[#2C5282] hover:text-[#E53E3E] text-xl mb-6 pb-3">
                                <Link href="/case-study/veritone">
                                    <a className="uppercase">VERITONE</a>
                                </Link>
                            </h3>
                            <p className="text-lg text-[#2A4365]">
                                The Admin and Marketing teams want to manage and observe the Media
                                Campaign data, so a system with tons of standard functions and also
                                easy to customize is needed. Veritone&apos;s Salesforce system is
                                developed with standard and customized objects management functions
                                and intergrates Veritone Core system for data migration. Solutions:
                                Sales Cloud, Service Cloud, REST API.
                            </p>
                            <Link href="/case-study/veritone">
                                <a className="case-study__btn">
                                    View more
                                    <ViewMoreIcon />
                                </a>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <Link href="/case-study/veritone">
                                <img
                                    loading="lazy"
                                    src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg"
                                    alt="Veritone"
                                    className="mx-auto w-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SalesforcePage;
