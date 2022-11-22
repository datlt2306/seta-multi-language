/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import styles from "./Banner.module.css";

const Breadcrumbs = dynamic(() => import("../Breadcrumbs"));
const Banner = ({ image, description, title, classImage, descriptionTwo, imageTwo }) => {
    const { btn } = useTrans();
    return (
        <div className="banner-main relative">
            <Image
                src={`https://da8pk1kbkdsqo.cloudfront.net/images/${image}`}
                layout="fill"
                objectFit="cover"
                className="z-10"
            />
            <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 relative z-20">
                <div>
                    <Breadcrumbs />
                    <h1 className={styles.banner__title}>{title}</h1>
                    <p className={styles.banner__desc}>{description}</p>
                    {descriptionTwo ? (
                        <p className={styles.banner__desc}>{descriptionTwo}</p>
                    ) : null}
                    <a
                        className="menu_contact banner__btn"
                        onClick={(e) => {
                            setTimeout(() => {
                                document.getElementById("section-contact") &&
                                    document.getElementById("section-contact").scrollIntoView({
                                        behavior: "smooth",
                                        block: "end",
                                    });
                            }, 0);
                        }}
                    >
                        {btn.letTalk}
                    </a>
                </div>
                {imageTwo ? (
                    <div>
                        <Image
                            className={classImage && classImage}
                            src={`https://da8pk1kbkdsqo.cloudfront.net/images/${imageTwo}`}
                            alt={title}
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Banner;
