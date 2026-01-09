"use client";
import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaPalette, FaCogs, FaSun, FaMoon } from "react-icons/fa";
import { getInitialTheme, toggleTheme, getInitialAccent, changeAccent } from "../utils/theme";

const services = [
  {
    title: "Web Development",
    description: "MERN Stack / Next.js based dynamic websites and landing pages.",
    icon: <FaLaptopCode className="w-10 h-10 text-[var(--accent-color)]" />,
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern & user-friendly interface design with Tailwind CSS.",
    icon: <FaPalette className="w-10 h-10 text-[var(--accent-color)]" />,
  },
  {
    title: "Full Stack Development",
    description: "Frontend + Backend integration with database and APIs for full projects.",
    icon: <FaCogs className="w-10 h-10 text-[var(--accent-color)]" />,
  },
];

export default function Services() {
  const [theme, setTheme] = useState(getInitialTheme());
  const [accent, setAccent] = useState(getInitialAccent());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    toggleTheme(theme);
    changeAccent(accent);
  }, []);

  const handleThemeToggle = () => setTheme(toggleTheme(theme));
  const handleAccentChange = (color) => setAccent(changeAccent(color));

  if (!mounted) return null;

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16 lg:px-24 min-h-screen transition-colors duration-500
      bg-gray-100 dark:bg-[#3a3ab1]"
    >
      {/* Theme Toggle Button */}
      <button
        onClick={handleThemeToggle}
        className="fixed top-5 right-5 z-30 p-3 rounded-full
        bg-[var(--accent-color)] text-white shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      {/* Section Title */}
      <div className="text-center mb-12">
          <h2
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-500"
    style={{
      backgroundImage: "var(--hero-gradient)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    My Services
  </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          I create modern, fast, and responsive websites and applications that work smoothly on all devices. I provide clean UI/UX and performance-optimized solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center
            hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-500 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
