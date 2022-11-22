import React from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumbs from "../Breadcrumbs";

const BannerCulture = ({ banner }) => {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Autoplay, EffectFade]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            effect="fade"
        >
            {banner.map((item, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        backgroundImage: `url(${item.background}`,
                    }}
                >
                    <div className="banner-main" style={{ height: 550 }}>
                        <div className="max-w-7xl mx-auto px-5 h-full grid lg:grid-cols-2 items-center justify-center">
                            <div>
                                <Breadcrumbs />
                                <h2 className="banner__title md:whitespace-nowrap">{item.title}</h2>
                                <p className="banner__desc">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerCulture;
