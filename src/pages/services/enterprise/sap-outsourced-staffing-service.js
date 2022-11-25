/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SapOutsourcedStaffingServicesPage = () => {
    const {
        services: { sapStaffing },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${sapStaffing.title}`,
                        description: `${sapStaffing.description}`,
                        url: "https://seta-international.com/services/enterprise/sap-outsourced-staffing-service/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sap-3.jpg"
                title={sapStaffing.title}
                description={sapStaffing.description}
            />
            <section className="section !pb-0">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/sap/6.jpg"
                                alt="SAP Outsourced Staffing Service"
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sapStaffing.article,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <h2
                        className="font-light text-[#2C5282] !leading-tight text-4xl md:text-5xl mb-12"
                        dangerouslySetInnerHTML={{
                            __html: sapStaffing.highlight.title,
                        }}
                    ></h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {sapStaffing.highlight.items.map((item, index) => (
                            <div
                                key={index}
                                className="shadow-lg bg-[#EDF2F7] border border-l-8 border-gray-200 border-l-[#3182CE] rounded-lg px-8 h-32 md:h-28 grid items-center text-center text-lg"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{sapStaffing.services.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                        {sapStaffing.services.items.map((service, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    src={service.thumbnailUrl}
                                    alt="Temporary Staffing"
                                    className="mx-auto w-full object-cover h-60 lg:h-96"
                                />
                                <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SapOutsourcedStaffingServicesPage;
