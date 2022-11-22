/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import IconNewWindow from "../Icons/NewWindow";
import Link from "next/link";
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
import Image from "next/image";

const IframeYoutube = dynamic(() => import("@/common/components/IframeYoutube"));

const CustomerServices = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {
        home: { testimonials },
    } = useTrans();
    return (
        <div className="services section">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center pb-6 lg:pb-10 mx-auto md:max-w-4xl">
                    <h2 className="section__title mb-4">{testimonials.title}</h2>
                    <p className="text-lg">{testimonials.desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <div className="client">
                            <Swiper
                                slidesPerView={1}
                                modules={[Thumbs, Autoplay]}
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                            >
                                {testimonials.feedbacks.map((customer, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="border-8 border-gray-300 rounded relative">
                                            <div className="!mb-0">
                                                <IframeYoutube
                                                    src={customer.videoYoutube}
                                                    image={customer.imgYoutube}
                                                />
                                            </div>
                                        </div>
                                        <blockquote className="text-lg text-gray-600 my-4 italic mb-5">
                                            {customer.quote}
                                        </blockquote>
                                        <Link href={customer.url} target="_blank" rel="noreferrer">
                                            <a className="inline-flex items-center text-blue-600 text-lg">
                                                {testimonials.visit} {customer.webiste}
                                                <IconNewWindow alt="" />
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="customer-thumbnail">
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={1}
                                direction="vertical"
                                modules={[Thumbs]}
                                onSwiper={setThumbsSwiper}
                                allowTouchMove={false}
                            >
                                {testimonials.customers.map((customer, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex cursor-pointer p-4">
                                            <div className="mr-4 w-16">
                                                <Image
                                                    src={customer.img}
                                                    alt={customer.name}
                                                    width={54}
                                                    height={54}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Image
                                                    src={customer.logo}
                                                    alt={customer.name}
                                                    width={64}
                                                    height={18}
                                                />
                                                <span className="text-[#2c5282] font-bold block mt-2">
                                                    {customer.name}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerServices;
