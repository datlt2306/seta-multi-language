import React from "react";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import dynamic from "next/dynamic";
import { ThemeContext } from "@/context/state";
const Header = dynamic(() => import("../components/Header"));
const ContactForm = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

const Layout = ({ children }) => {
    const { toggle, toggleFunction } = React.useContext(ThemeContext);
    return (
        <div className={toggle ? "toggled" : ""}>
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
