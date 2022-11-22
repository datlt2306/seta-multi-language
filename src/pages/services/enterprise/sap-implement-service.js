/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SapImplementServices = () => {
    const {
        services: { sapImplement },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "SAP Implementation Services",
                        description:
                            "Whether it’s a full-scale SAP ERP Implementation enabling a specific component, or performing a system upgrade, many of our clients select us as their implementer for our deep functional expertise, industry-specific knowledge, and our Leading Practices methodology.",
                        url: "https://seta-international.com/services/enterprise/sap-implement-service/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sap-2.jpg"
                title={sapImplement.title}
                description={sapImplement.description}
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/sap/5.jpg"
                                alt="SAP Implementation Services"
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sapImplement.article,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-10">
                        <h2 className="section__subtitle">{sapImplement.methodology.title}</h2>
                        <p className="section__desc">{sapImplement.methodology.description}</p>
                    </div>
                    <div>
                        <img
                            src="https://da8pk1kbkdsqo.cloudfront.net/images/sap/9.svg"
                            alt="Setup and Enablement"
                        />
                        <div className="py-16">
                            {sapImplement.methodology.steps.map((step, index) => (
                                <div key={index} className="khoi border-b py-4">
                                    <h3 className="font-bold cursor-pointer">
                                        <span className="inline-flex mr-4 justify-center items-center text-xl font-bold text-[#0077CB] bg-number bg-cover w-10 h-10">
                                            {index + 1}
                                        </span>
                                        {step.name}
                                    </h3>
                                    <div className="noi-dung my-5 ml-14 hidden">{step.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SapImplementServices;
