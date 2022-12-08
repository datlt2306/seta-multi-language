import React from "react";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import dynamic from "next/dynamic";
import { ThemeContext } from "@/context/state";
import { useRouter } from "next/router";
const Header = dynamic(() => import("../components/Header"));
const ContactForm = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

const Layout = ({ children }) => {
    const { toggle, toggleFunction } = React.useContext(ThemeContext);
    const router = useRouter();
    console.log(router.locale);
    return (
        <div
            className={`${toggle ? "toggled" : ""}${
                router.locale === "en" ? " font-roboto" : " font-hiragino-kaku"
            }`}
        >
            <Nav />
            <div
                className="w-full min-h-full absolute pin-r flex flex-col wrapper"
                // onClick={toggleFunction}
            >
                <Header />
                {children}
                <ContactForm />
                <ScrollToTop />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
