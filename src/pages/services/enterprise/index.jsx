import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Enterprise = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/services/enterprise/sap");
    }, [router]);
    return <div></div>;
};

export default Enterprise;
