/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const IconNewWindow = ({ alt }) => {
    return (
        <Image
            className="inline-block ml-2"
            loading="lazy"
            src="https://da8pk1kbkdsqo.cloudfront.net/images/icons/new-window.png"
            alt={alt}
            width={16}
            height={16}
        />
    );
};

export default IconNewWindow;
