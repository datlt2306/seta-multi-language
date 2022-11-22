/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Banner = dynamic(() => import("@/common/components/Banner"));
const DevelopmentProcess = dynamic(() => import("@/common/components/DevelopmentProcess"));
const WebDevelopmentPage = () => {
    const {
        services: { web },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Web Application Development Service",
                        description:
                            "Give your business a leg up over the competition with a beautifully designed and fully functional site created by a team of expert outsourced web development specialists",
                        url: "https://seta-international.com/services/web-application-development/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/web.svg"
                imageTwo="web-app.svg"
                title="Web Application Development Service"
                description="Give your business a leg up over the competition with a beautifully
                            designed and fully functional site created by a team of expert
                            outsourced web development specialists"
            />
            <DevelopmentProcess data={web.process.items} title={web.process.title} />
            <section className="section bg-gray-100">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{web.stories.title}</h2>
                        <p className="section__desc"> {web.stories.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Link href="/case-study/restaurant">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/teacher-zone">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/motion-global">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/trend-micro">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
                                        />
                                    </div>
                                    <h3 className="font-bold text-[#2C5282] text-xl my-6">
                                        Trend Micro
                                    </h3>
                                    <p>
                                        As a global leader in cloud security, Trend Micro develops
                                        Internet content security and threat management solutions
                                        that make the world safe for businesses and consumers to
                                        exchange digital information. With more than 20 years of
                                        experience, Trend Micro is recognized as the market leader
                                        in server security for delivering top-ranked client, server,
                                        and cloud-based security solutions that stop threats faster
                                        and protect data in physical, virtualized, and cloud
                                        environments.
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
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/medtalk">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/syspro">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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
                            <Link href="/case-study/ujazo">
                                <a>
                                    <div className="relative">
                                        <Image
                                            loading="lazy"
                                            src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg"
                                            alt="Web Application Development"
                                            className="mx-auto w-full object-cover h-60 lg:h-96"
                                            layout="responsive"
                                            width={200}
                                            height={130}
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

export default WebDevelopmentPage;
