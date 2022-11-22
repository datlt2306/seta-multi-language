/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const MediaEntertaiment = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const { media } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Media & Entertainment Industry",
                        description:
                            "Media and Entertainment (M&E) industry is in a transformation phase as both old and new continues to coexist. Interactivity, digitization, multiple-platforms, multiple-devices and globalization of services based landscape has remodeled the media and entertainment vertical over the last decade.",
                        url: "https://seta-international.com/industries/media-entertaiment/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/automotive.jpg"
                title="Media & Entertainment Industry"
                description="Media & Entertainment (M&E) industry is in a transformation
                phase as both old and new continues to coexist. Interactivity,
                digitization, multiple-platforms, multiple-devices and globalization of
                services based landscape has remodeled the media and entertainment
                vertical over the last decade."
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-[4fr,5fr] gap-8 mb-10">
                        <div>
                            <img
                                loading="lazy"
                                src={media.sectionOne.thumbnailUrl}
                                alt="Media & Entertainment"
                                className="mx-auto w-full object-cover"
                            />
                        </div>
                        <div
                            className="text-[#2A4365] leading-7"
                            dangerouslySetInnerHTML={{
                                __html: media.sectionOne.content,
                            }}
                        ></div>
                    </div>
                    <div className="mt-10 md:mt-20">
                        <div className="flex relative transition-opacity duration-1000 opacity-100">
                            <div className="mx-auto bg-[#4299E1] mb-2 lg:mb-0 p-1 rounded-full relative whitespace-nowrap overflow-y-hidden overflow-x-auto">
                                <ul className="tabs">
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            // className="active text-base whitespace-nowrap transition-colors duration-250 delay-250 text-white"
                                            className={openTab === 1 && "active"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                        >
                                            <div className="h-9 px-6 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {media.tabOne.label}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={openTab === 2 && "active"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                        >
                                            <div className="h-9 px-6 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {media.tabTwo.label}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={openTab === 3 && "active"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(3);
                                            }}
                                        >
                                            <div className="h-9 px-6 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {media.tabThree.label}
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content-inner">
                            <div className={openTab === 1 ? "block" : "hidden"}>
                                <div className="mt-10 mb-4 grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="text-[#2A4365] border-b-2 border-[#4299E1] pb-6 mb-10 text-xl uppercase font-semibold">
                                            {media.tabOne.title}
                                        </h4>
                                        <p className="text-[#2A4365] text-lg">
                                            {media.tabOne.content}
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={media.tabOne.thumbnailUrl}
                                            alt={media.tabOne.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"}>
                                <div className="mt-10 mb-4 grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4
                                            className="text-[#2A4365] border-b-2 border-[#4299E1] pb-6 mb-10 text-xl uppercase font-semibold"
                                            dangerouslySetInnerHTML={{
                                                __html: media.tabTwo.title,
                                            }}
                                        ></h4>
                                        <p
                                            className="text-[#2A4365] text-lg"
                                            dangerouslySetInnerHTML={{
                                                __html: media.tabTwo.content,
                                            }}
                                        ></p>
                                    </div>
                                    <div>
                                        <img
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/5.jpg"
                                            alt="PROVEN AI FOR SPORTS TO ACCELERATE WORKFLOWS CONTENT UTILIZATION"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"}>
                                <div className="mt-10 mb-4 grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4
                                            className="text-[#2A4365] border-b-2 border-[#4299E1] pb-6 mb-10 text-xl uppercase font-semibold"
                                            dangerouslySetInnerHTML={{
                                                __html: media.tabThree.title,
                                            }}
                                        ></h4>
                                        <p
                                            className="text-[#2A4365] text-lg"
                                            dangerouslySetInnerHTML={{
                                                __html: media.tabThree.content,
                                            }}
                                        ></p>
                                    </div>
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={media.tabThree.thumbnailUrl}
                                            alt={media.tabThree.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img
                loading="lazy"
                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/media-entertaiment-2.jpg"
                alt="Our Success Stories"
                className="w-full object-cover"
            />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{media.stories.title}</h2>
                        <p className="section__desc">{media.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Link href="/case-study/veritone">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg"
                                        alt="VERITONE"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
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
                            <Link href="/case-study/restaurant">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg"
                                        alt="THE RESTAURANT EXPERT"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
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
                            <Link href="/case-study/teacher-zone">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png"
                                        alt="TEACHERZONE"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
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
                            <Link href="/case-study/motion-global">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg"
                                        alt="Motion Global"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
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
                            <Link href="/case-study/sk-planet">
                                <a>
                                    <img
                                        loading="lazy"
                                        src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg"
                                        alt="SK Planet"
                                        className="mx-auto w-full object-cover h-60 lg:h-96"
                                    />
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default MediaEntertaiment;
