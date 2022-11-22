import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import ArrowRight from "../Icons/ArrowRight";
import clsx from "clsx";
const convertBreadcrumb = (string) => {
    if (string === "ar-vr") {
        return string
            .replace(/-/g, "/")
            .replace(/oe/g, "ö")
            .replace(/ae/g, "ä")
            .replace(/ue/g, "ü");
    }
    if (string === "iot") {
        return string.replace(string, "IoT");
    }
    if (string === "r1") {
        return string.replace(string, "R1 Concept");
    }
    if (string === "research-development") {
        return string
            .replace(/-/g, " & ")
            .replace(/oe/g, "ö")
            .replace(/ae/g, "ä")
            .replace(/ue/g, "ü");
    }
    return string.replace(/-/g, " ").replace(/oe/g, "ö").replace(/ae/g, "ä").replace(/ue/g, "ü");
};

const Breadcrumbs = (props) => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split("/");
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }
    return (
        <nav aria-label="breadcrumbs">
            <ol className={clsx(styles.breadcrumb, props.center && styles.center)}>
                <li className={styles["breadcrumb__item"]}>
                    <Link href="/">
                        <a>
                            <span>Home</span> <ArrowRight />
                        </a>
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href} className={styles["breadcrumb__item"]}>
                            <Link href={breadcrumb.href}>
                                {convertBreadcrumb(breadcrumb.breadcrumb) === "sap" ||
                                convertBreadcrumb(breadcrumb.breadcrumb) === "ai" ||
                                convertBreadcrumb(breadcrumb.breadcrumb) === "ar/vr" ? (
                                    <a style={{ textTransform: "uppercase" }}>
                                        <span>{convertBreadcrumb(breadcrumb.breadcrumb)} </span>
                                        <ArrowRight />
                                    </a>
                                ) : (
                                    <a>
                                        <span>{convertBreadcrumb(breadcrumb.breadcrumb)} </span>
                                        <ArrowRight />
                                    </a>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
