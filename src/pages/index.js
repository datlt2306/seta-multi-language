import Seo from "@/common/seo";
import useTrans from "@/hooks/useTranslate";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const BannerHome = dynamic(() => import("@/common/components/BannerHome"));
const CustomerServices = dynamic(() => import("@/common/components/CustomerServices"));
const SomeOfOurClients = dynamic(() => import("@/common/components/SomeOfOurClients"));
const OurPortfolios = dynamic(() => import("@/common/components/OurPortfolios"));
const WhyChoose = dynamic(() => import("@/common/components/WhyChoose"));
const OurServicesOffering = dynamic(() => import("@/common/components/OurServicesOffering"));

export default function Home() {
    const {
        home: { title, description },
    } = useTrans();
    return (
        <>
            <Suspense fallback={`Loading...`}>
                <Seo
                    data={{
                        title: `${title}`,
                        description: `${description}`,
                        url: "https://seta-international.com/",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/seo-thumbnail-seta.png",
                    }}
                />
            </Suspense>
            <BannerHome />
            <CustomerServices />
            <SomeOfOurClients />
            <OurPortfolios />
            <WhyChoose />
            <OurServicesOffering />
        </>
    );
}
