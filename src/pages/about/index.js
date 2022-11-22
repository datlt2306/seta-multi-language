import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AboutPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/about/culture");
    }, [router]);
    return <div></div>;
};

export default AboutPage;
