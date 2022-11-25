import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const SapTrainingPage = () => {
    const {
        services: { sapTraining },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${sapTraining.title}`,
                        description: `${sapTraining.description}`,
                        url: "https://seta-international.com/services/enterprise/sap-training/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/sap-5.jpg"
                title={sapTraining.title}
                description={sapTraining.description}
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <div className="grid sm:grid-cols-2 gap-8">
                        {sapTraining.items.map((item, index) => (
                            <div
                                key={index}
                                className="shadow-lg bg-[#EDF2F7] border border-l-8 border-gray-200 border-l-[#3182CE] rounded-lg px-8 py-5 lg:py-0 lg:h-28 grid items-center text-center text-lg"
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

export default SapTrainingPage;
