import React from "react";

const DevelopmentProcess = ({ data, title }) => {
    return (
        <section className="section border-t border-gray-200 border-b">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center pb-10">
                    <h2 className="section__title">{title}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {data.map((item, index) => (
                        <div key={index}>
                            <span className="flex mx-auto mb-4 justify-center items-center text-4xl md:text-5xl font-bold text-[#0077CB] bg-number bg-cover w-20 h-20 md:w-24 md:h-24">
                                0{index + 1}
                            </span>
                            <h4 className="font-semibold text-base md:text-xl mb-4">{item.name}</h4>
                            <ul className="leading-7 text-sm md:text-base">
                                {item.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
