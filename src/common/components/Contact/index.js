/* eslint-disable react/no-unescaped-entities */
import { countries } from "@/data/countries";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";

import "react-toastify/dist/ReactToastify.css";
import useTrans from "@/hooks/useTranslate";
import Image from "next/image";

const ContactForm = () => {
    const { contact, btn } = useTrans();
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const [value, setValue] = useState("");

    const apiCheckCountry = `https://api.ipdata.co?api-key=d56af10b304fe12e74dd3375e4eb229493c60c864bcdb80d0615f19e`;
    const fetcherCountry = async (url) => await axios.get(url);

    const { data: currentCountry, error } = useSWR(apiCheckCountry, fetcherCountry, {
        dedupingInterval: 60 * 60 * 1000,
    });

    const onSubmit = (data) => {
        // console.log(data);
        const newData = {
            ...data,
            phonenumber: data.phonenumber ? data.phonenumber : " ",
        };

        try {
            axios
                .post(`https://api.seta-international.com/api/mail`, newData)
                .then(() => {
                    swal("");
                    swal(
                        "Thank you for contacting us. Our teams will be getting back to you within one business day.",
                        "",
                        "success"
                    );
                })
                .then(() => {
                    reset();
                });
        } catch (error) {
            swal("Server error. Please try again.", "You clicked the button!", "error");
        }
    };

    const onHandleChange = ({ currentTarget: { value } }) => {
        setValue(value);
    };
    return (
        <section className="section-contact" id="section-contact">
            <Image
                src="https://da8pk1kbkdsqo.cloudfront.net/images/bgFooter.jpg"
                layout="fill"
                objectFit="cover"
            />
            <div className="mx-auto px-4 max-w-6xl text-center relative z-10">
                <div className="pb-10">
                    <h2 className="!text-white section__title">{contact.title}</h2>
                </div>
                <div className="w-full mb-8">
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row md:mb-4 -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="firstname"
                                    className="form-control"
                                    type="text"
                                    placeholder={contact.firstName}
                                    {...register("firstname", { required: true })}
                                />
                                {errors.firstname && (
                                    <span className="block mt-3 text-left text-red-500">
                                        {contact.errors}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="lastname"
                                    className="form-control"
                                    type="text"
                                    placeholder={contact.lastName}
                                    {...register("lastname", { required: true })}
                                />
                                {errors.lastname && (
                                    <span className="block mt-3 text-left text-red-500">
                                        {contact.errors}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:mb-4 -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="company"
                                    className="form-control"
                                    type="text"
                                    placeholder={contact.company}
                                    {...register("company", { required: true })}
                                />
                                {errors.company && (
                                    <span className="block mt-3 text-left text-red-500">
                                        {contact.errors}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="jobtitle"
                                    className="form-control"
                                    type="text"
                                    placeholder={contact.jobTitle}
                                    {...register("jobtitle", { required: true })}
                                />
                                {errors.jobtitle && (
                                    <span className="block mt-3 text-left text-red-500">
                                        {contact.errors}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:mb-4 -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <select
                                    id="howDidYouLearnAboutUs"
                                    // className=""
                                    {...register("howDidYouLearnAboutUs")}
                                    className={`block w-full p-5 leading-tight text-gray-800 border border-gray-200 focus:border-gray-500 rounded focus:outline-none ${
                                        value ? "" : "greyed"
                                    }`}
                                    value={value}
                                    onChange={onHandleChange}
                                >
                                    <option defaultChecked value="no choice">
                                        {contact.howDidYouLearnAboutUs.name}
                                    </option>
                                    {contact.howDidYouLearnAboutUs.options.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="phonenumber"
                                    className="form-control"
                                    type="text"
                                    placeholder={contact.phonenumber}
                                    {...register("phonenumber")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:mb-4 -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <input
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    type="email"
                                    placeholder={contact.email}
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="block mt-3 text-left text-red-500">
                                        {contact.errors}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <select
                                    id="country"
                                    className="block w-full p-5 leading-tight text-gray-800 border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                                    {...register("country")}
                                    value={`${currentCountry?.data.country_code}`}
                                >
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="questionComment"
                                className="form-control"
                                placeholder={contact.questionComment}
                                rows={5}
                                defaultValue={""}
                                {...register("question", { required: true })}
                            />
                            {errors.question && (
                                <span className="block mt-3 text-left text-red-500">
                                    {contact.errors}
                                </span>
                            )}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="cursor-pointer inline-block bg-[#fff] text-[#2C5282] py-3 px-6 font-bold rounded"
                            >
                                {btn.letTalk}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactForm;
