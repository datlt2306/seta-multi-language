import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

import { GA_TRACKING_ID } from "@/lib/gtag";
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                {/* <link
                    rel="preload"
                    href="/fonts/hiragino_kaku_gothic_pro_w6-webfont.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                /> */}

                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <Script
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
