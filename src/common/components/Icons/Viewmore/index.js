/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import React from "react";

const ViewMoreIcon = () => {
    const { btn } = useTrans();
    return (
        <img
            loading="lazy"
            className="inline-block"
            src="https://da8pk1kbkdsqo.cloudfront.net/images/icons/arrow-right.svg"
            alt={btn.viewMore}
        />
    );
};

export default ViewMoreIcon;
