/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const BannerCaseStudy = dynamic(() => import("@/common/components/BannerCaseStudy"));
const TeacherZone = () => {
    const { teacherzone } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Case Study - Teacher Zone",
                        description:
                            "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
                        url: "https://seta-international.com/case-study/teacher-zone/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <BannerCaseStudy title={teacherzone.title} description={teacherzone.description} />
            <section className="-mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="border-8 rounded shadow-lg">
                        <iframe
                            loading="lazy"
                            className="w-full"
                            height={550}
                            src="https://www.youtube.com/embed/ZIFVM2-5PeA"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            autoPlay={0}
                            allowFullScreen
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-20 items-center">
                        <div>
                            <h2 className="text-[#2A4365] font-light text-5xl">
                                {teacherzone.challenge.title}
                            </h2>
                            <p className="text-[#2A4365] leading-7 mt-8">
                                {teacherzone.challenge.description}
                            </p>
                        </div>
                        <div>
                            <img
                                loading="lazy"
                                src={teacherzone.challenge.thumbnailUrl}
                                alt="Teacher Zone"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                style={{
                    background:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/bgSolution.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                    <h2 className="text-white text-5xl font-bold">{teacherzone.solution.title}</h2>
                    <p className="text-white text-lg mt-5">
                        {teacherzone.solution.description}
                        <Link href="https://teacherzone.com">https://teacherzone.com</Link>
                    </p>
                </div>
            </div>
            {/*End .services*/}
            <div>
                <div className="max-w-7xl mx-auto px-5 py-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="swiper-slide">
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone/1.jpg"
                                alt="Teacher Zone"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone/2.jpg"
                                alt="Teacher Zone"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                loading="lazy"
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone/3.jpg"
                                alt="Teacher Zone"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherZone;
