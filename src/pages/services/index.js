import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ServicesPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/services/web-application-development");
    }, [router]);
    return <div></div>;
};

export default ServicesPage;
