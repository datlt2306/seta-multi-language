/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const DevelopmentProcess = dynamic(() => import("@/common/components/DevelopmentProcess"));
const MobileDevelopmentPage = () => {
    const {
        services: { mobile },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Mobile Application Development Service",
                        description:
                            "IOS, Android, and cross-platform apps with React Native and Flutter are just one click away",
                        url: "hhttps://seta-international.com/services/mobile-application-development/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/mobile.svg"
                title="Mobile Application Development Service"
                description="IOS, Android, and cross-platform apps with React Native and Flutter are
                            just one click away"
            />
            <DevelopmentProcess data={mobile.process.items} title={mobile.process.title} />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{mobile.stories.title}</h2>
                        <p className="section__desc">{mobile.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Link href="/case-study/toll-roads">
                                <a>
                                    <Image
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg"
                                        alt="Seta Mobile Developemnt Oursourcing"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                        layout="responsive"
                                        width={688}
                                        height={532}
                                    />
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        The Toll Roads
                                    </h3>
                                    <p>
                                        Offers One-Time-Toll payments, new FasTrak account
                                        enrollment and full FasTrak account maintenance, including
                                        vehicle changes, payments, toll history and transponder
                                        maintenance.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/veritone">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        VERITONE
                                    </h3>
                                    <p>
                                        Veritone is one of top AI companies focusing on
                                        democratizing AI and enabling every organization and every
                                        person with the power of AI. What started in 2014 with the
                                        idea of providing unified access to hundreds of cognitive
                                        engines through one common software infrastructure, evolved
                                        to the world’s first AI operating system, aiWARE, which
                                        orchestrates a diverse ecosystem of cognitive engines to
                                        power intelligent automation for both commercial and
                                        government organizations.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/aeris">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">AERIS</h3>
                                    <p>
                                        Aeris is a technology partner with a proven history of
                                        helping companies unlock value through IoT. Built from the
                                        ground up for IoT and globally tested at scale, Aeris IoT
                                        services are based on the broadest technology stack in the
                                        industry, including the Aeris Connectivity Platform (ACP)
                                        and the Aeris Mobility Suite (The Suite), spanning
                                        connectivity up to vertical solutions for things that move.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/motion-global">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        Motion Global
                                    </h3>
                                    <p>
                                        Motion Global operates the SmartBuyGlasses Optical Group,
                                        one of the world’s largest designer eyewear e-commerce
                                        companies. With a presence across Asia Pacific, Europe and
                                        the Americas, we have been market leaders in over 20
                                        countries for more than 10 years.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/avia">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">Avia</h3>
                                    <p>
                                        AVIA is a first of its kind, real time, digital charter
                                        marketplace, marrying the latest in technology with
                                        traditional boutique customer service.​AVIA proprietary
                                        technology specializes in connecting nominally priced, zero
                                        passenger, positioning flights with financially savvy
                                        passengers. These &quot;empty legs&quot; can be sold at
                                        pennies on the dollar and finally bridge the cost gap
                                        between a business class commercial flight and a true
                                        private charter experience
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/teacher-zone">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        TEACHERZONE
                                    </h3>
                                    <p>
                                        Teacher Zone is an all-in-one platform to engage your
                                        students, automate your admin, and take control of your
                                        business. Teacher Zone has provided a platform for me to
                                        offer more organized and structured practice assignments to
                                        students. The chat feature has been amazing as a way to
                                        encourage students to interact with each other and build
                                        community outside of class.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/medtalk">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        MedTalk
                                    </h3>
                                    <p>
                                        MedTalk was a pioneer startup in developing healthcare
                                        applications for some big hospitals in the US. It was
                                        founded by two well-known doctors.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/sk-planet">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        SK Planet
                                    </h3>
                                    <p>
                                        AppFactory, is a new company established by SK Planet in
                                        2012, a globally recognized and respected leader in
                                        innovative mobile services. AppFactory’s mission is to
                                        transform great ideas into compelling mobile apps for the
                                        global market. SK Planet was created by SK Telecom in
                                        November 2011 with the purpose of focusing on global
                                        businesses, including new media and digital content.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/syspro">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        SysPro
                                    </h3>
                                    <p>
                                        SYSPRO is one of the longest standing independent,
                                        international vendors of business software solutions and
                                        services. With over 30 years&apos; experience in the ERP
                                        industry, we have a wealth of knowledge to assist you in
                                        configuring a system tailored specifically to your business
                                        needs.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/restaurant">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        THE RESTAURANT EXPERT
                                    </h3>
                                    <p>
                                        Restaurant Systems Pro, an online restaurant management
                                        software, was developed from the ground up for independent
                                        restaurants by TheRestaurantExpert.com, a restaurant
                                        training and coaching company. A restaurant is one of the
                                        most difficult businesses to run, but it can be rewarding
                                        and profitable if you apply the right systems in your
                                        operations. That is what we provide you – the right systems.
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/case-study/ujazo">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg"
                                            alt="Seta Mobile Developemnt Oursourcing"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={688}
                                            height={532}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">Ujazo</h3>
                                    <p>
                                        Ujazo was established with one primary mission – Help
                                        consumers be aware of their health status and lean how to
                                        improve the areas that needs more attention
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MobileDevelopmentPage;
