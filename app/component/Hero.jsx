"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import HireModal from "./HireMeModal";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  const gradient = "linear-gradient(90deg, #4f46e5, #9333ea, #3b82f6)";

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
    document.documentElement.style.setProperty("--hero-gradient", gradient);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // SOCIAL ICONS WITH LINKS
  const socialIcons = [
    {
      icon: FaGithub,
      link: "https://github.com/mrcoder569mustafa-cpu",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mr-coder-mustafa-4065a4398/",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
    {
      icon: FaFacebook,
      link: "#",
    },
  ];

  return (
    <>
      <section
        className="
          relative flex flex-col md:flex-row items-center justify-center
          w-full h-screen overflow-hidden px-6 md:px-12
          bg-gradient-to-br
          from-slate-100 via-white to-slate-200
          dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
        "
      >
        {/* THEME TOGGLE */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="
              fixed top-5 right-5 z-30 p-3 rounded-full
              bg-white text-gray-800
              dark:bg-slate-800 dark:text-gray-100
              shadow-lg hover:scale-110 transition-all duration-300
            "
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        )}

        {/* SOCIAL ICONS */}
        <div className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
          {socialIcons.map(({ icon: Icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-2xl
                text-gray-700 dark:text-gray-200
                hover:text-indigo-500 dark:hover:text-cyan-400
                hover:scale-125 transition-all duration-300
              "
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* TEXT AREA */}
        <motion.div
          className="flex-1 text-center md:text-left px-6 space-y-6 z-10 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-gray-600 dark:text-gray-300">Hi, I’m</span>
            <span
              className="ml-3 bg-clip-text text-transparent drop-shadow-lg"
              style={{ backgroundImage: "var(--hero-gradient)" }}
            >
              Mustafa
            </span>
            <div
              className="w-40 h-1 mt-3 rounded-full"
              style={{ backgroundImage: "var(--hero-gradient)" }}
            />
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
              I am a{" "}
            </span>
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--hero-gradient)" }}
            >
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "App Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Coder",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h3>

          <p className="max-w-md leading-relaxed font-semibold text-gray-600 dark:text-gray-300">
            Turning ideas into reality using modern web technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
            <button
              onClick={() => setOpenModal(true)}
              className="
                bg-gradient-to-r from-cyan-500 to-blue-600
                text-white px-6 py-3 rounded-xl font-bold
                shadow-lg shadow-cyan-500/30
                hover:scale-105 transition-all
              "
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* PROFILE IMAGE + SINGLE ROTATING DASH RING */}
<div className="flex-1 relative mt-10 flex justify-center items-center">

  {/* DASHED ROTATING RING */}
  <div
    className="
      absolute
      w-72 h-72 md:w-[27rem] md:h-[27rem]
      rounded-full
      border-2 border-dashed
      border-indigo-400 dark:border-cyan-400
      animate-dashSpin
      pointer-events-none
    "
  ></div>

  {/* IMAGE WRAPPER */}
  <div
    className="
      relative
      w-64 h-64 md:w-[26rem] md:h-[26rem]
      rounded-full
      overflow-hidden
      shadow-2xl
      bg-white dark:bg-slate-900
      border border-gray-200 dark:border-slate-700
      z-10
    "
  >
   
    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10"></div>

    <img
      src="/Assets/Images/Myphoto.jpg"
      alt="Profile"
      className="
        w-full h-full object-cover
        brightness-100 dark:brightness-90
        contrast-110
        saturate-105
        transition-all duration-300
      "
    />
  </div>
</div>

      </section>

      <HireModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedCategory="Hero Hire Request"
      />
    </>
  );
}
