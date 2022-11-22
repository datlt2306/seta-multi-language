/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/common/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                action: "url('https://da8pk1kbkdsqo.cloudfront.net/images/bg-contact.svg')",
                why: "url('https://da8pk1kbkdsqo.cloudfront.net/images/bg-why.svg')",
                number: "url('https://da8pk1kbkdsqo.cloudfront.net/images/bg-number.svg')",
            }),
        },
    },
    plugins: [],
};
