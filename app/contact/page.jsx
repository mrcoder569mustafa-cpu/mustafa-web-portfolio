"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaPhone, FaTag, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "next-themes";


const Contact = () => {
  const form = useRef();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_subject: form.current.user_subject.value,
      user_message: form.current.user_message.value,
    };

    emailjs
      .send("service_vk7rh1s", "template_reik5p1", formData, "gxnhqy2qAqxXyXAg1")
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ");
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  if (!mounted) return null;

  return (
    <section
      className={`py-24 px-6 md:px-12 ${
        theme === "dark" ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h1
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
  style={{
    backgroundImage: "var(--hero-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
 Get in Touch
</h1>
        <div className="w-24  h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Fill out the form below to contact me
        </p>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mt-4 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-semibold hover:bg-gray-500 transition"
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="flex-1 w-full">
          <img
            src="/Assets/Images/contactMe.jpg"
            alt="Contact"
            className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-gray-800 dark:bg-gray-700 p-10 rounded-2xl shadow-xl w-full border border-gray-900">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <InputField icon={<FaUser />} name="user_name" placeholder="Name" />
              <InputField icon={<FaEnvelope />} name="user_email" placeholder="Email" type="email" />
              <InputField icon={<FaPhone />} name="user_phone" placeholder="Phone (optional)" type="tel" />
              <InputField icon={<FaTag />} name="user_subject" placeholder="Subject" />
            </div>

            <TextareaField icon={<FaEnvelope />} name="user_message" placeholder="Your Message" rows={5} />

         <div className="flex justify-center">
 <button
  type="submit"
  className="inline-flex w-72 items-center justify-center rounded-lg
    bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
    text-white font-semibold px-6 py-3
    shadow-lg shadow-blue-500/30
    hover:scale-105 hover:brightness-110
    focus:outline-none focus:ring-2 focus:ring-cyan-400
    transition-all duration-300"
>
  <span>Send Message</span>
  <FaPaperPlane className="ml-2" />
</button>

</div>


          </form>
        </div>
      </div>
    </section>
  );
};

// Reusable Input Field
const InputField = ({ icon, name, placeholder, type = "text" }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full pl-12 py-3 rounded-lg border border-transparent focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 transition text-black dark:text-white dark:bg-gray-800"
    />
  </div>
);

// Reusable Textarea Field
const TextareaField = ({ icon, name, placeholder, rows }) => (
  <div className="relative">
    <div className="absolute left-4 top-3 text-gray-400 text-lg">{icon}</div>
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      className="w-full pl-12 py-3 rounded-lg border border-transparent focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 transition text-black dark:text-white dark:bg-gray-800 resize-none"
    />
  </div>
);

export default Contact;
