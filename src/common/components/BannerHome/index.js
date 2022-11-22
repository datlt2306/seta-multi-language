/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useTrans from "@/hooks/useTranslate";
const bannersImage = ({ src, width, quality }) => {
    return `https://da8pk1kbkdsqo.cloudfront.net/images/banner/${src}?w=${width}&q=${
        quality || 75
    }`;
};
const BannerHome = () => {
    const { home } = useTrans();
    return (
        <div className="relative">
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="swiper-slide relative bg-cover bg-center">
                    <Image
                        // loader={bannersImage}
                        src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/event-2.jpg"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div
                        className="max-w-7xl mx-auto px-5 flex items-center"
                        style={{ height: 550 }}
                    >
                        <div className="relative z-10">
                            <h1
                                className="banner__title lg:whitespace-nowrap"
                                dangerouslySetInnerHTML={{
                                    __html: home.banner[0].title,
                                }}
                            ></h1>
                            <button className="block text-2xl font-bold text-white my-5 pb-2 border-b-4 border-yellow-500">
                                {home.banner[0].time}
                            </button>
                            <span className="block text-2xl font-bold text-white">
                                {home.banner[0].location}
                            </span>
                            <Link href="https://blog.seta-international.com/news/seta-international-representative-at-infocomm-southeast-asia-2022/">
                                <a
                                    target="_blank"
                                    className="bg-[#23edc7] text-2xl inline-block px-5 py-2 font-bold my-5 cursor-pointer"
                                >
                                    {home.banner[0].readmore}
                                </a>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide relative bg-cover bg-center">
                    <Image
                        // loader={bannersImage}
                        src="https://da8pk1kbkdsqo.cloudfront.net/images/banner/event.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div
                        className="max-w-7xl mx-auto px-5 flex items-center"
                        style={{ height: 550 }}
                    >
                        <div className="relative z-10">
                            <h1
                                className="banner__title lg:whitespace-nowrap"
                                dangerouslySetInnerHTML={{
                                    __html: home.banner[1].title,
                                }}
                            ></h1>
                            <button className="block text-2xl font-bold text-white my-5 pb-2 border-b-4 border-yellow-500">
                                {home.banner[1].time}
                            </button>
                            <span className="block text-2xl font-bold text-white">
                                {home.banner[1].location}
                            </span>
                            <Link href="https://blog.seta-international.com/news/seta-representative-at-world-congress-on-innovation-technology-2022-wcit-2022/">
                                <a
                                    target="_blank"
                                    className="bg-[#23edc7] text-2xl inline-block px-5 py-2 font-bold my-5 cursor-pointer"
                                >
                                    {home.banner[1].readmore}
                                </a>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide relative bg-cover bg-center">
                    <Image
                        // loader={bannersImage}
                        src="https://da8pk1kbkdsqo.cloudfront.net/images/banner.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div
                        className="max-w-7xl mx-auto px-5 flex items-center"
                        style={{ height: 550 }}
                    >
                        <div className="relative z-10">
                            <h1
                                className="banner__title lg:whitespace-nowrap"
                                dangerouslySetInnerHTML={{
                                    __html: home.banner[2].title,
                                }}
                            ></h1>
                            <p
                                className="banner__desc"
                                dangerouslySetInnerHTML={{
                                    __html: home.banner[2].desc,
                                }}
                            ></p>
                            <a
                                className="menu_contact banner__btn"
                                onClick={(e) => {
                                    setTimeout(() => {
                                        document.getElementById("section-contact") &&
                                            document
                                                .getElementById("section-contact")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "end",
                                                });
                                    }, 0);
                                }}
                            >
                                LET'S TALK
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerHome;
