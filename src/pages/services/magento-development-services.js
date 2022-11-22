/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Seo from "@/common/seo";
import { BUTTONS_ECOMMERCE, MAGENTO_SUCCESS_STORIES, MAGENTO_WHAT_WE_OFFERING } from "@/data";
import React, { Suspense, useEffect, useState } from "react";

import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/common/components/Banner"));
const ResearchDevelopment = () => {
    const [projects, setProjects] = useState(null);
    const [activeButton, setActiveButton] = useState(1);

    useEffect(() => {
        setProjects(MAGENTO_SUCCESS_STORIES);
    }, []);

    const filterCategrory = (projectType) => {
        let resultFiltered = MAGENTO_SUCCESS_STORIES.filter(
            (project) => project.type == projectType
        );
        return resultFiltered;
    };
    const onHandleFilterCategory = (e) => {
        let typeProject = e.target.value;
        const id = e.target.dataset.id;
        setActiveButton(id);
        typeProject != "all"
            ? setProjects(filterCategrory(typeProject))
            : setProjects(MAGENTO_SUCCESS_STORIES);
    };
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: "Magento Development Services",
                        description:
                            "The only team you'll ever need to help your e-commerce business succeed",
                        url: "https://seta-international.com/services/magento-development-services/",
                        thumbnailUrl: "/images/seta-international.webp",
                    }}
                />
            </Suspense>
            <Banner
                image="banner/magento.jpg"
                title="Magento Development Services"
                description="The only team you'll ever need to help your e-commerce business succeed"
            />

            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">What We Offer?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {MAGENTO_WHAT_WE_OFFERING.map((item, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    src={item.img}
                                    alt={item.title}
                                    className="mx-auto w-full object-cover"
                                />
                                <h3 className="font-bold text-[#2C5282] text-lg my-6">
                                    {item.title}
                                </h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div
                style={{
                    background:
                        'url("https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/7.jpg")',
                }}
                className="section bg-cover"
            >
                <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center h-full py-32">
                    <h2 className="text-white text-5xl uppercase leading-tight">
                        A trustworthy partner for your <br />
                        Magento-powered business
                    </h2>
                </div>
            </div>
            <section className="section">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center pb-10">
                        <h2 className="section__title">Our Success Stories</h2>
                        <div className="hidden lg:flex flex-wrap space-x-4 justify-center items-center my-8">
                            {BUTTONS_ECOMMERCE &&
                                BUTTONS_ECOMMERCE.map((button, index) => (
                                    <button
                                        key={button.id}
                                        className={`border p-3 mb-3 cursor-pointer hover:bg-[#2C5282] hover:text-white ${
                                            activeButton == button.id
                                                ? "bg-[#2C5282] text-white"
                                                : ""
                                        }`}
                                        onClick={onHandleFilterCategory}
                                        value={button.value}
                                        data-id={button.id}
                                    >
                                        {button.name}
                                    </button>
                                ))}
                        </div>
                        <select
                            onChange={onHandleFilterCategory}
                            className="block lg:hidden w-full p-5 mt-5 leading-tight text-gray-800 border border-gray-200 focus:border-gray-500 rounded focus:outline-none greyed"
                        >
                            {BUTTONS_ECOMMERCE &&
                                BUTTONS_ECOMMERCE.map((button, index) => (
                                    <option key={index} value={button.value}>
                                        {button.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {projects &&
                            projects.map((item, index) => (
                                <div key={index}>
                                    <a href={item.path} target="_blank">
                                        <div>
                                            <img src={`${item.img}`} className="mx-auto" />
                                        </div>
                                        <h3 className="font-bold text-[#2C5282] text-lg mt-6 mb-4 uppercase hover:underline">
                                            {item.name}
                                        </h3>
                                        <p className="text-lg text-[#A1A1AA]">{item.desc}</p>
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResearchDevelopment;
