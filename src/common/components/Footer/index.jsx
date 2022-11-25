import { MenuIndustries } from "@/data";
import useTrans from "@/hooks/useTranslate";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const {
        menuOurSourcing,
        menuNextGen,
        menuEnterprise,
        menuIndustries,
        menuAboutUs,
        menuRD,
        menuResourceCenter,
    } = useTrans();
    return (
        <footer>
            <div className="py-16 bg-[#041C5E]">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase">
                                {menuOurSourcing.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuOurSourcing.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase mt-5">
                                {menuEnterprise.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuEnterprise.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase">
                                {menuNextGen.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuNextGen.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase mt-5">
                                {menuRD.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuRD.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase">
                                {MenuIndustries.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuIndustries.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase">
                                {menuResourceCenter.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuResourceCenter.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="font-semibold text-white mb-2 sm:text-lg md:text-xl uppercase mt-5">
                                {menuAboutUs.heading}
                            </h3>
                            <ul className="leading-8">
                                {menuAboutUs.menus.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.path}>
                                            <a className="text-gray-300 font-light hover:underline">
                                                {menu.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                                <li className="text-white">
                                    <div className="flex space-x-4 py-3 mt-3">
                                        <Link href="https://www.facebook.com/SETA.International.VIETNAM">
                                            <a className="cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-facebook"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/seta-international/">
                                            <a className="cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-linkedin"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                    <a href="mailto:contact@setacinq.vn" className="text-gray-300">
                                        contact@setacinq.vn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 text-center border-t border-white bg-gray-300">
                <p className="text-base font-semibold text-[#6d7077]">
                    Copyright 2021 SETA International. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
