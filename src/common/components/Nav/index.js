/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
    const { menuList, contact } = useTrans();
    return (
        <nav
            id="sidebar"
            className="fixed z-10 h-full shadow-md sidebar block lg:hidden block lg:hidden"
        >
            <ul className={styles["sidebar-menu"]}>
                <li className="relative group">
                    <a className={styles["sidebar-menu__link"]}>
                        <span className="last firstlevel">{menuList[0].label}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/png"
                            className="h-3 w-3 inline-block font-bold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                    <ul className={styles["sidebar-sub-menu"]}>
                        <li className={styles["nav__item"]}>
                            <a className="nav__link border-b border-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/png"
                                    className="h-5 w-5 inline-block mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                {menuList[0].subCate[0].label}
                            </a>
                            <ul className="p-2 ml-4">
                                {menuList[0].subCate[0].children.map((menu, index) => (
                                    <li key={index}>
                                        <Link href="/services/web-application-development">
                                            <a className="nav__link">
                                                <Image
                                                    className="h-4 w-4 inline-block mr-1"
                                                    src={menu.icon}
                                                    alt={menu.label}
                                                    objectFit="contain"
                                                    width={16}
                                                    height={18}
                                                />
                                                <span>{menu.label}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className={styles["nav__item"]}>
                            <a className="nav__link border-b border-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/png"
                                    className="h-5 w-5 inline-block mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                {menuList[1].label}
                            </a>
                            <ul className="p-2 ml-4">
                                {menuList[1].children.map((menu, index) => (
                                    <li key={index}>
                                        <Link href="/services/web-application-development">
                                            <a className="nav__link">
                                                <Image
                                                    className="h-4 w-4 inline-block mr-1"
                                                    src={menu.icon}
                                                    alt={menu.label}
                                                    objectFit="contain"
                                                    width={16}
                                                    height={18}
                                                />
                                                <span>{menu.label}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/industries">
                        <a className={styles["sidebar-menu__link"]}>
                            <span className="firstlevel">{menuList[2].label}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/png"
                                className="h-3 w-3 inline-block font-bold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </a>
                    </Link>
                    <ul className="border border-gray-100 bg-white z-10 pl-6">
                        {menuList[2].children.map((menu, index) => (
                            <li key={index} className={styles["nav__item"]}>
                                <Link href="/services/web-application-development">
                                    <a className="nav__link">
                                        <Image
                                            className="h-4 w-4 inline-block mr-1"
                                            src={menu.icon}
                                            alt={menu.label}
                                            objectFit="contain"
                                            width={16}
                                            height={18}
                                        />
                                        <span>{menu.label}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/research-development">
                        <a className="px-3 py-3 flex justify-between border-t border-b border-gray-200">
                            <span className="firstlevel">{menuList[3].label}</span>
                        </a>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/case-study">
                        <a className="px-3 py-3 flex justify-between border-t border-b border-gray-200">
                            <span className="firstlevel">{menuList[4].label}</span>
                        </a>
                    </Link>
                </li>
                <li className="relative group">
                    <a className={styles["sidebar-menu__link"]}>
                        <span className="firstlevel">{menuList[5].label}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/png"
                            className="h-3 w-3 inline-block font-bold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                    <ul className="p-2 ml-4">
                        {menuList[5].children.map((menu, index) => (
                            <li className={styles["nav__item"]} key={index}>
                                <Link href="/about/culture">
                                    <a className="nav__link">
                                        <Image
                                            className="h-4 w-4 inline-block mr-1"
                                            src={menu.icon}
                                            alt="Culture"
                                            objectFit="contain"
                                            width={16}
                                            height={18}
                                        />
                                        <span>{menu.label}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="relative group">
                    <a
                        className="px-3 py-3 flex justify-between border-t border-b border-gray-200"
                        onClick={(e) => {
                            setTimeout(() => {
                                document.getElementById("section-contact") &&
                                    document.getElementById("section-contact").scrollIntoView({
                                        behavior: "smooth",
                                        block: "end",
                                    });
                            }, 0);
                        }}
                    >
                        {contact.title}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
