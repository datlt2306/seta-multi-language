/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { OUR_PORTFOLIO } from "@/data";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";

const OurPortfolios = () => {
    const {
        home: { portfolio },
    } = useTrans();

    return (
        <section className="section homepage-portfolio relative">
            <Image
                src="https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/bg.jpg"
                objectFit="cover"
                layout="fill"
            />
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center pb-10">
                    <h2 className="section__title !text-white">{portfolio.title}</h2>
                </div>
                <div className="swiper portfolio">
                    <Swiper slidesPerView={1} modules={[Navigation]} navigation>
                        {portfolio.items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="portfolio__img">
                                    <Image
                                        // loader={image}
                                        src={item.img}
                                        height={577}
                                        width={1025}
                                        objectFit="cover"
                                        layout="responsive"
                                        alt={item.name}
                                    />
                                </div>
                                <div className="portfolio__content">
                                    <h2 className="portfolio__name">{item.name}</h2>
                                    <p className="portfolio__desc">{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="text-center mt-10">
                        <Link href="/case-study">
                            <a className="portfolio__btn">VIEW ALL CASE STUDIES</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPortfolios;
