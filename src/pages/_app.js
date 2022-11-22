import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";
import "../../styles/globals.css";
import Layout from "../common/layouts";
import { ThemeProvider } from "../context/state";
import * as gtag from "../lib/gtag";

export const AppContext = React.createContext();
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const toggled = document.querySelector(".toggled");
        if (toggled) {
            toggled.classList.remove("toggled");
        }

        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [router]);

    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
