import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NextGen = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/next-gen/ai");
    }, [router]);
    return <div></div>;
};

export default NextGen;
