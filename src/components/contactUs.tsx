"use client";

import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset success message after 5 seconds
  };

  return (
    <div>
      <div className="bg-grid-black/[0.70]  md:min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-20 ">
        {/* Header */}
        <div className="p-4 z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Contact Me
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Get in touch with me by filling out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-10 z-10 w-full max-w-md mx-auto  rounded-[20px]  px-6 md:px-0">
        <BackgroundGradient className='flex flex-col rounded-[20px] bg-white dark:bg-zinc-900 overflow-hedden h-full w-full justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className="mt-10 z-10 w-full max-w-md mx-auto bg-neutral-900/[.7] p-6  rounded-[20px] "
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-neutral-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-neutral-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-neutral-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-500 transition duration-300"
          >
            Submit
          </button>

          {submitted && (
            <p className="mt-4 text-center text-teal-400">
              Thank you! Your message has been submitted.
            </p>
          )}
        </form>
        </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
