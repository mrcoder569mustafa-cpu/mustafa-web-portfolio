"use client";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
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
    name: "ChatBot Application using MERN",
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

  const gradient = "linear-gradient(90deg, #4f46e5, #9333ea, #3b82f6)";

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
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
        className="fixed top-5 right-5 z-30 p-3 rounded-full bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100 shadow-lg hover:scale-110 transition-all duration-300"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* ===== Top Heading ===== */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-500"
        style={{ backgroundImage: "var(--hero-gradient)", WebkitBackgroundClip: "text", color: "transparent" }}
      >
        About Me
        <div className="w-25 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full border border-radius-20"></div>
      </h1>
      

      {/* Profile Image with hover gradient border */}
{/* PROFILE + TEXT */}
<section className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
  {/* Left: Profile Image (Square) */}
  <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 overflow-hidden shadow-2xl group rounded-xl">
    <img
      src="/Assets/Images/AboutMe.jpg"
      alt="Profile"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 border-4 border-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
  </div>

  {/* Right: Text Area */}
  <div className="flex-1 text-left space-y-6 max-w-xl">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 dark:text-gray-300">
      Hi, I’m{" "}
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "var(--hero-gradient)" }}
      >
      Muhammad Raza - <br />Mustafa
      </span>
    </h2>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
      Junior Full Stack Developer (Mern) with 6 months hands-on experience through
      personal projects and a 3-year diploma in Software Engineering
      from Aptech. Skilled in React, Tailwind CSS, and modern web
      technologies. Additionally proficient in IT hardware/software tasks
      and Photoshop. Passionate about creating functional and
      visually appealing web applications.
    </p>

    {/* Download Resume */}
    <div className="flex gap-4 flex-wrap">
      <a
        href="/Assets/MyResume.pdf"
        download
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 shadow-md hover:shadow-xl transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl text-center space-y-8">
        <h2 className="text-3xl font-bold text-blue-500">Some of My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsPreview.map((project, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              glareEnable
              glareMaxOpacity={0.2}
              transitionSpeed={1000}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-3 text-left">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <div className="mt-4 flex gap-3 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-10">
          <a
            href="/showcase"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </a>

          <a
            href="mailto:mustafaofficail730@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Email Me
          </a>
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
