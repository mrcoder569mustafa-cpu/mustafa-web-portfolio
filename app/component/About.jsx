"use client";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import HireModal from "./HireMeModal";

const projectsPreview = [
  {
    img: "/Assets/Food_web.png",
    name: "Food Ordering Website",
    live: "https://food-ordering-website-nine-iota.vercel.app",
    github: "https://github.com/mrcoder569mustafa-cpu/Food-Ordering-website.git",
  },
  {
    img: "/Assets/Images/ChatApp.png",
    name: "ChatBot Application (MERN)",
    live: "https://chatbot-app-frontend-inky.vercel.app/",
    github: "https://github.com/mrcoder569mustafa-cpu/ChatbotApp.git",
  },
  {
    img: "/Assets/Images/crud-operation-js.png",
    name: "JavaScript CRUD App",
    live: "https://javascript-crud-nine.vercel.app/studentlist.html",
    github: "https://github.com/mrcoder569mustafa-cpu/javascript-crud.git",
  },
];

export default function AboutMe() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const gradient =
    "linear-gradient(90deg, #4f46e5, #9333ea, #3b82f6)";

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.style.setProperty("--hero-gradient", gradient);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 px-6 md:px-12 py-16 flex flex-col items-center gap-24">

      {/* THEME TOGGLE */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-5 right-5 z-30 p-3 rounded-full 
                   bg-white dark:bg-slate-800 
                   shadow-lg hover:scale-110 transition-all"
      >
        {theme === "dark" ? (
          <FiSun size={22} className="text-yellow-400" />
        ) : (
          <FiMoon size={22} className="text-indigo-500" />
        )}
      </button>

      {/* HEADING */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
        style={{
          backgroundImage: "var(--hero-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About Me
        <div className="w-28 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
      </h1>

      {/* PROFILE + TEXT */}
      <section className="flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full">
        {/* IMAGE */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-xl shadow-2xl group">
          <img
            src="/Assets/Images/AboutMe.jpg"
            alt="Muhammad Raza"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* TEXT */}
        <div className="flex-1 space-y-6 max-w-xl">
          <p className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
            Web Application Developer
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-200">
            Hi, I’m{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--hero-gradient)" }}
            >
              Muhammad Raza Mustafa
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
            Web Application Developer (MERN Stack) with 6 months of hands-on
            experience building real-world web applications through personal and
            academic projects. Completed a 3-year diploma in Software Engineering
            from Aptech. Skilled in React.js, Tailwind CSS, JavaScript, Node.js,
            Express, and MongoDB with a focus on clean UI, scalability, and
            performance. Also experienced in IT hardware/software support and
            basic graphic design using Photoshop.
          </p>

          <a
            href="/Assets/MyResume.pdf"
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl w-full text-center space-y-10">
        <h2 className="text-3xl font-bold text-blue-500">
          Some of My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsPreview.map((project, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left space-y-3">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {project.name}
                </h3>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                  >
                    Live
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <HireModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedCategory="About Hire Request"
      />
    </div>
  );
}
