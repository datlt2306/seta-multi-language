import dynamic from "next/dynamic";
import React from "react";

const Breadcrumbs = dynamic(() => import("../Breadcrumbs"));
const BannerCaseStudy = ({ title, description }) => {
    return (
        <div className="banner-casestudy">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Breadcrumbs center={true} />
                <h2 className="text-white font-light text-5xl">{title}</h2>
                <p className="text-white text-xl mt-8 leading-8 font-light">{description}</p>
            </div>
        </div>
    );
};

export default BannerCaseStudy;
