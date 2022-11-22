import React from "react";

const ScrollToTop = () => {
    return (
        <div
            className="fixed bottom-10 right-10 bg-[#041C5E] opacity-40 rounded cursor-pointer hover:opacity-100 transition ease-in-out duration-200"
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                />
            </svg>
        </div>
    );
};

export default ScrollToTop;
