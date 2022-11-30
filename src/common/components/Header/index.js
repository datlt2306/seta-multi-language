/* eslint-disable @next/next/no-img-element */
import { ThemeContext } from "@/context/state";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Arrow from "../Icons/Arrow";
import NavLink from "../NavLink";
import styles from "./Header.module.css";

const Header = () => {
    const { toggleFunction } = React.useContext(ThemeContext);
    const { menuList, menuContact } = useTrans();
    const router = useRouter();
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-5">
                <div className=" flex py-3 items-center justify-between space-x-10">
                    <div>
                        <NavLink href="/">
                            <a className="cursor-pointer">
                                <Image
                                    src="/images/seta-international.webp"
                                    alt="Logo Seta International"
                                    width={268}
                                    height={41}
                                    priority
                                />
                            </a>
                        </NavLink>
                    </div>
                    <div className="hidden lg:inline-flex" id="main_menu">
                        <ul className={styles["main-menu"]}>
                            {menuList.map((route, index) => (
                                <li key={index} className="relative group">
                                    <NavLink
                                        href={route.path ? route.path : ""}
                                        activeClassName={`${styles.activeMenu}`}
                                    >
                                        <a className={styles["menu-item__link"]}>
                                            {route.label}
                                            {route.children || route.subCate ? <Arrow /> : ""}
                                        </a>
                                    </NavLink>
                                    {route.subCate && (
                                        <ul className="absolute left-0 top-0 mt-[40px] w-[270px] rounded-lg shadow-lg border border-gray-100 bg-white z-10 hidden group-hover:block">
                                            {route.subCate.map((cate, index) => (
                                                <li
                                                    key={index}
                                                    className="whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800"
                                                >
                                                    <a className="px-3 py-3 block border-b border-gray-200">
                                                        {cate.label}
                                                    </a>
                                                    <ul className="p-2 ml-4">
                                                        {cate.children.map((menu, index) => (
                                                            <li key={index}>
                                                                <Link href={menu.path}>
                                                                    <a className="flex items-center space-x-1 px-2 py-2 block hover:text-[#2C5282]">
                                                                        <Image
                                                                            className="h-4 w-4 inline-block mr-1"
                                                                            src={menu.icon}
                                                                            alt={`${menu.label}`}
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
                                            ))}
                                        </ul>
                                    )}
                                    {route.children && (
                                        <ul className="absolute left-0 top-0 mt-[40px] py-4 px-2 w-60 rounded-lg shadow-lg border border-gray-100 bg-white z-10 hidden group-hover:block">
                                            {route.children.map((subMenuItem, index) => (
                                                <li
                                                    key={index}
                                                    className={styles["sub-menu__item"]}
                                                >
                                                    <NavLink href={`${subMenuItem.path}`}>
                                                        <a className="flex items-center space-x-2 px-2 py-1.5 block hover:text-[#2C5282]">
                                                            <Image
                                                                className="h-4 w-4 inline-block"
                                                                src={subMenuItem.icon}
                                                                alt={subMenuItem.label}
                                                                objectFit="contain"
                                                                width={16}
                                                                height={18}
                                                            />
                                                            <span>{subMenuItem.label}</span>
                                                        </a>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li className="relative group">
                                <a
                                    className={styles["menu-item__link"]}
                                    onClick={(e) => {
                                        setTimeout(() => {
                                            document.getElementById("section-contact") &&
                                                document
                                                    .getElementById("section-contact")
                                                    .scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "end",
                                                    });
                                        }, 0);
                                    }}
                                >
                                    {menuContact.label}
                                </a>
                            </li>
                            <li className="relative group">
                                <a className="block py-1">
                                    {router.locale === "jp" ? (
                                        <Image
                                            src="/images/icons/japan.png"
                                            width={32}
                                            height={32}
                                            priority
                                        />
                                    ) : (
                                        <Image
                                            src="/images/icons/united-states-of-america.png"
                                            width={32}
                                            height={32}
                                            priority
                                        />
                                    )}
                                </a>
                                <div className="group-hover:block hidden absolute right-0 z-10 top-8 text-right w-14 ">
                                    <div className="py-1" role="none">
                                        {router.locale === "en" ? (
                                            <Link href="/jp" locale="jp">
                                                <a className="cursor-pointer block">
                                                    <Image
                                                        src="/images/icons/japan.png"
                                                        width={32}
                                                        height={32}
                                                        priority
                                                    />
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href="/en" locale="en">
                                                <a className="cursor-pointer block">
                                                    <Image
                                                        src="/images/icons/united-states-of-america.png"
                                                        width={32}
                                                        height={32}
                                                        priority
                                                    />
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <button
                            id="menu-switch"
                            className={styles["menu-switch"]}
                            data-menu-active="null"
                            onClick={toggleFunction}
                        >
                            <Image
                                src="https://da8pk1kbkdsqo.cloudfront.net/images/humberger.svg"
                                width={24}
                                height={24}
                                alt="Button Mobile"
                                priority
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
