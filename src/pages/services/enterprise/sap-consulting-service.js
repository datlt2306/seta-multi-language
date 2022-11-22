import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SapConsultingServicesPage = () => {
    const {
        services: { sapConsulting },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "SAP Consulting Service",
                        description:
                            " Our numerous and diverse SAP consulting services are specially tailored to the client’s business operations and field of industry because they are provided by specialized consultants.",
                        url: "https://seta-international.com/services/enterprise/sap-consulting-service/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sap-4.jpg"
                title={sapConsulting.title}
                description={sapConsulting.description}
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <div className="grid sm:grid-cols-2 gap-8">
                        {sapConsulting.items.map((item, index) => (
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
        </>
    );
};

export default SapConsultingServicesPage;
