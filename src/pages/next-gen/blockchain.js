/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const Blockchain = () => {
    const { blockchain } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Next-Gen Technology - Blockchain",
                        description:
                            "One of the key features of Blockchain is that this digital ledger is accessible across several hundreds and thousands of computers and is not bound to be kept in a single place. Blockchain can be utilized in multiple industries including Financial Services, Healthcare, Government, Travel and Hospitality, and Retail due to being highly secure, more transparent processes, eliminating the overheads and intermediary costs, and making real-time transactions possible.",
                        url: "https://seta-international.com/next-gen/blockchain/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/next-gen/blockchain.jpg"
                title="Blockchain"
                description=" One of the key features of Blockchain is that this digital ledger is
                accessible across several hundreds and thousands of computers and is not
                bound to be kept in a single place. Blockchain can be utilized in
                multiple industries including Financial Services, Healthcare,
                Government, Travel and Hospitality, and Retail due to being highly
                secure, more transparent processes, eliminating the overheads and
                intermediary costs, and making real-time transactions possible."
            />
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{blockchain.why.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {blockchain.why.items.map((item, index) => (
                            <div key={index}>
                                <div className="mb-5">
                                    <img
                                        loading="lazy"
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        className="mx-auto"
                                    />
                                </div>
                                <h3 className="font-bold text-[#2C5282] text-xl mb-4 lg:mt-0 text-center">
                                    {item.name}
                                </h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/next-gen/blockchain-2.jpg"
                alt="Our Services"
            />
            <section className="bg-gray-100 section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{blockchain.services.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {blockchain.services.items.map((item, index) => (
                            <div
                                key={index}
                                className="shadow-lg bg-[#EDF2F7] border border-l-8 border-gray-200 border-l-[#3182CE] rounded-lg px-8 py-5 grid items-center"
                            >
                                <div>
                                    <strong>{item.name}</strong>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blockchain;
