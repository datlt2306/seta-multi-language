/* eslint-disable @next/next/no-img-element */
import useTrans from "@/hooks/useTranslate";
import React from "react";

const TabsResearch = () => {
    const {
        researchDevelopment: { labels },
    } = useTrans();
    const [openTab, setOpenTab] = React.useState(1);
    const [openSubTab, setOpenSubTab] = React.useState(11);
    const [openSubTabTwo, setOpenSubTabTwo] = React.useState(16);
    return (
        <section>
            <div className="mx-auto max-w-7xl pt-16 px-4">
                <ul
                    id="menuTabs"
                    className="tabs flex mb-0 list-none justify-center pt-3 pb-4 space-x-32"
                    role="tablist"
                >
                    <li className="-mb-px mr-2 last:mr-0 text-center relative ">
                        <a
                            className={openTab === 1 && "active"}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                        >
                            <img
                                className="mx-auto"
                                src="https://trungpt.s3-us-west-1.amazonaws.com/aiplatform/icon/aiplatform-icon-image.svg"
                                alt="Image"
                                style={{ width: 61, height: 61 }}
                            />
                            <span className="block mt-4 text-lg">{labels.image}</span>
                            <div className="tabs-arrow mt-2 text-blue-500">
                                <svg className="fill-current text-link" viewBox="0 0 14 8">
                                    <path d="M7.14286 8L0.338372 0.499999L13.9473 0.5L7.14286 8Z" />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 text-center relative ">
                        <a
                            className={openTab === 2 && "active"}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                        >
                            <img
                                className="mx-auto"
                                src="https://trungpt.s3-us-west-1.amazonaws.com/aiplatform/icon/aiplatform-icon-video.svg"
                                alt="Video"
                                style={{ width: 61, height: 61 }}
                            />
                            <span className="block mt-4 text-lg">{labels.video}</span>
                            <div className="tabs-arrow mt-2 text-blue-500">
                                <svg className="fill-current text-link" viewBox="0 0 14 8">
                                    <path d="M7.14286 8L0.338372 0.499999L13.9473 0.5L7.14286 8Z" />
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <div className="flex relative transition-opacity duration-1000 opacity-100 mt-10">
                            <div className="mx-auto bg-blue-100 mb-2 lg:mb-0 p-1 rounded-full relative whitespace-nowrap overflow-y-hidden overflow-x-auto">
                                <ul className="tabs">
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTab === 11 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTab(11);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.boundingBox}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTab === 12 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTab(12);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.point}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTab === 13 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTab(13);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.cuboid}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTab === 14 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTab(14);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.polygon}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTab === 15 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTab(15);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                Lines & Splines
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content-inner">
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTab === 11 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Image-Bounding-Box.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTab === 12 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Image-Point.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTab === 13 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Image-Cuboid.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTab === 14 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Image-Polygon.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTab === 15 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video loop autoPlay playsInline muted src />
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Image-Line.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"}>
                        <div className="flex relative transition-opacity duration-1000 opacity-100 mt-10">
                            <div className="mx-auto bg-blue-100 mb-2 lg:mb-0 p-1 rounded-full relative whitespace-nowrap overflow-y-hidden overflow-x-auto">
                                <ul className="tabs">
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTabTwo === 16 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTabTwo(16);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.boundingBox}
                                            </div>
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 last:mr-0">
                                        <a
                                            className={
                                                "text-base whitespace-nowrap transition-colors duration-250 delay-250 text-black " +
                                                (openSubTabTwo === 17 ? "active" : "")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenSubTabTwo(17);
                                            }}
                                        >
                                            <div className="h-10 px-4 rounded-full relative flex items-center cursor-pointer select-none transition-all duration-250 cursor-initial">
                                                {labels.point}
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content-inner">
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTabTwo === 16 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Video-BoundingBox-Interpolation.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab-pane-inner" +
                                    " " +
                                    (openSubTabTwo === 17 ? "block active" : "hidden")
                                }
                            >
                                <div className="mt-5">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            width="100%"
                                            height="100%"
                                            src="https://d1vru1eiq1l0ol.cloudfront.net/videos/Video-Transcription.mp4"
                                            type="video/mp4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabsResearch;
