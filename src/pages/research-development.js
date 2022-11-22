/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const TabsResearch = dynamic(() => import("@/common/components/TabResearch"));
const ResearchDevelopment = () => {
    const {
        researchDevelopment: { title, description, banner, ourProduct, slogan, articles, labels },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Research & Development",
                        description:
                            "The R&D Department of SETA was established in 2019 with a strong desire to pursue new technologies and develop better solutions. Our brilliant engineers are coming up with innovative and smarter ways to tackle unsolved challenges.",
                        url: "https://seta-international.com/research-development/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner image="banner/r-d.jpg" title={banner.title} description={banner.description} />
            <section className="section !pb-0">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">{ourProduct.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-[#2A4365] text-4xl mb-10">BlueEye</h4>
                            <p className="text-lg mb-4">{ourProduct.desc1}</p>
                            <p className="text-lg mb-4">{ourProduct.desc2}</p>
                        </div>
                        <div>
                            <div className="embed-responsive embed-responsive-16by9">
                                <a
                                    data-fancybox
                                    data-type="iframe"
                                    className="absolute inset-0 various fancybox.iframe z-10"
                                    href="
                              https://d1vru1eiq1l0ol.cloudfront.net/videos/Complete+V1+.mp4
                              "
                                />
                                <video
                                    className=" embed-responsive-item"
                                    poster="https://da8pk1kbkdsqo.cloudfront.net/images/demo.png"
                                    loop
                                    autoPlay
                                    width="100%"
                                    height="100%"
                                    src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Complete+V1+.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TabsResearch />
            <p className="text-center py-16">
                {labels.seeMore}
                <Link href="https://blueeye.ai">
                    <a className="text-blue-500"> https://blueeye.ai</a>
                </Link>
            </p>
            <div
                style={{
                    background:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/banner/r-d/1.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center h-full py-32">
                    <h2 className="text-white text-5xl">{slogan}</h2>
                </div>
            </div>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-[#2A4365] text-4xl mb-10">{articles[0].title}</h2>
                            <p
                                className="text-lg leading-[28px]"
                                dangerouslySetInnerHTML={{
                                    __html: articles[0].content,
                                }}
                            ></p>
                        </div>
                        <div>
                            <iframe
                                height={350}
                                loading="lazy"
                                className="w-full"
                                src="https://www.youtube.com/embed/9CRY3bEc100?&showinfo=0&controls=2&autohide=1&modestbranding=1"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                autoPlay={0}
                                allowFullScreen
                            />
                        </div>
                        <div>
                            <img
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/r-d/2.jpg"
                                alt="Research & Development"
                            />
                        </div>
                        <div
                            className="leading-[28px] text-lg"
                            dangerouslySetInnerHTML={{
                                __html: articles[1].content,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResearchDevelopment;
