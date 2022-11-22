/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import React from "react";

const SomeOfOurClients = () => {
    const {
        home: { clients },
    } = useTrans();
    return (
        <section className="bg-gray-100 section border-gray-200 border-b">
            <div className="max-w-7xl px-4 mx-auto">
                <div className="text-center pb-10">
                    <h2 className="section__title">{clients.title}</h2>
                </div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-6 xl:grid-cols-6 md:gap-8">
                    {clients.items.map((item, index) => (
                        <div className="logo-partner relative " key={index}>
                            <Image
                                src={item.img}
                                layout="responsive"
                                width={115}
                                height={93}
                                objectFit="contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SomeOfOurClients;
