/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav
            id="sidebar"
            className="fixed z-10 h-full shadow-md sidebar block lg:hidden block lg:hidden"
        >
            <ul className={styles["sidebar-menu"]}>
                <li className="relative group">
                    <a className={styles["sidebar-menu__link"]}>
                        <span className="last firstlevel">Services</span>
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
                                Outsourcing Services
                            </a>
                            <ul className="p-2 ml-4">
                                <li>
                                    <Link href="/services/web-application-development">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/web-development.png"
                                                alt="Web Development"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Web Development</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-application-development">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/mobile-development.png"
                                                alt="Mobile Development"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Mobile Development</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/legacy-migration">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/legacy-migration.png"
                                                alt="Legacy Migration"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Legacy Migration</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/testing">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/testing.png"
                                                alt="Testing"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Testing</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/embedded-system">
                                        <a className="nav__link">
                                            <Image
                                                src="/images/icons/embedded.png"
                                                alt="Embedded System"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Embedded System</span>
                                        </a>
                                    </Link>
                                </li>
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
                                Enterprise Services
                            </a>
                            <ul className="p-2 ml-4">
                                <li>
                                    <Link href="/services/enterprise/sap">
                                        <a className="nav__link">
                                            <Image
                                                src="/images/icons/web-development.png"
                                                alt="SAP Services"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>SAP Services</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/magento-development-services">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/magento.png"
                                                alt="Magento Services"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Magento Services</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/enterprise/salesforce">
                                        <a className="nav__link">
                                            <Image
                                                className="h-4 w-4 inline-block mr-1"
                                                src="/images/icons/cloud.png"
                                                alt="Salesforce"
                                                objectFit="contain"
                                                width={16}
                                                height={18}
                                            />
                                            <span>Salesforce</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <a className={styles["sidebar-menu__link"]}>
                        <span className="last firstlevel">Next-Gen technologies</span>
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
                    <ul className="border border-gray-100 bg-white z-10 pl-6">
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/ai">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/ai.png"
                                        alt="AI"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>AI</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/iot">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/iot.png"
                                        alt="IoT"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>IoT</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/blockchain">
                                <a className="nav__link">
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
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                    <span>Blockchain</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/ar-vr">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/ar_vr.png"
                                        alt="AR/VR"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>AR/VR</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/big-data">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/bigdata.png"
                                        alt="Big Data"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Big Data</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/next-gen/cloud">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/cloud.png"
                                        alt="Cloud"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Cloud</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/industries">
                        <a className={styles["sidebar-menu__link"]}>
                            <span className="firstlevel">Industries</span>
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
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/automotive">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/automovie.png"
                                        alt="Automotive"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Automotive</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/media-entertaiment">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/media-entertaiment.png"
                                        alt="Media & Entertainment"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Media & Entertainment</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/healthcare">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/healthcare.png"
                                        alt="Heathcare"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Heathcare</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/security">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/security.png"
                                        alt="Security"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Security</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/transportation">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/transporation.png"
                                        alt="Transportation"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Transportation</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/retail">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/retail.png"
                                        alt="Retail"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Retail</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/industries/finance">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/finance.png"
                                        alt="Finance"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Finance</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/research-development">
                        <a className="px-3 py-3 flex justify-between border-t border-b border-gray-200">
                            <span className="firstlevel">R & D</span>
                        </a>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/case-study">
                        <a className="px-3 py-3 flex justify-between border-t border-b border-gray-200">
                            <span className="firstlevel">Case Studies</span>
                        </a>
                    </Link>
                </li>
                <li className="relative group">
                    <a className={styles["sidebar-menu__link"]}>
                        <span className="firstlevel">About Us</span>
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
                        <li className={styles["nav__item"]}>
                            <Link href="/about/culture">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/culture.png"
                                        alt="Culture"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Culture</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="/about/location">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/pin-2.png"
                                        alt="Location"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>Location</span>
                                </a>
                            </Link>
                        </li>
                        <li className={styles["nav__item"]}>
                            <Link href="https://blog.seta-international.com">
                                <a className="nav__link">
                                    <Image
                                        className="h-4 w-4 inline-block mr-1"
                                        src="/images/icons/papers.png"
                                        alt="SETA Insight"
                                        objectFit="contain"
                                        width={16}
                                        height={18}
                                    />
                                    <span>SETA Insight</span>
                                </a>
                            </Link>
                        </li>
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
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
