/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@fancyapps/ui"]);

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n: {
        locales: ["en", "jp"],
        defaultLocale: "en",
    },
    images: {
        formats: ["image/webp"],
        domains: ["da8pk1kbkdsqo.cloudfront.net", "setawebsite.s3.us-west-1.amazonaws.com"],
    },
};

module.exports = withTM(nextConfig);
