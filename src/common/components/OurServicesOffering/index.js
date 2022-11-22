/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServicesOffering = () => {
    const {
        home: { services },
    } = useTrans();
    return (
        <section className="offering section border-b">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center pb-10">
                    <h2 className="section__title">{services.title}</h2>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-6 md:gap-8">
                    {services.items.map((service, index) => (
                        <div className="relative group overflow-hidden" key={index}>
                            <Link href={service.path}>
                                <a>
                                    <Image
                                        src={service.img}
                                        alt={service.name}
                                        className="group-hover:scale-105 transform transition duration-200 ease-in-out"
                                        width={180}
                                        height={194}
                                        objectFit="cover"
                                        layout="responsive"
                                    />
                                    <h3 className="absolute bottom-3 left-1 font-bold text-white text-[11px] sm:left-3 sm:text-base lg:text-lg uppercase">
                                        {service.name}
                                    </h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServicesOffering;
