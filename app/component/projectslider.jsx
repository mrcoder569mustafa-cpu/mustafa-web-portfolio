"use client";
import React, { useState } from "react";
import { projectsData } from "@/constants/projectsData";
import Image from "next/image";

export default function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="min-h-screen bg-background-dark dark:bg-background-light py-20 px-[6vw] text-white transition-colors duration-500">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          PROJECT SHOWCASE
        </h2>
        <p className="text-gray-400 mt-3 text-base">
          Explore my projects — built with modern technologies and creativity 🚀
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300 transform hover:scale-105
              ${
                selectedCategory === category
                  ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)] shadow-lg"
                  : "bg-transparent text-gray-400 dark:text-gray-300 border-gray-600 hover:bg-[var(--accent-color)] hover:text-white shadow-md"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-background-light dark:bg-background-dark border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_20px_1px_var(--accent-color)] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative w-full h-56 sm:h-64">
              <Image
                src={project.image || "/Assets/default.png"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[var(--accent-color)] text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-background-light dark:bg-background-dark rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl transition-colors duration-500">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-3xl text-gray-300 hover:text-[var(--accent-color)] transition-all"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={selectedProject.image || "/Assets/default.png"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex gap-4 mt-4 flex-wrap">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="flex-1 bg-background-dark dark:bg-background-light hover:bg-[var(--accent-color)] text-white font-semibold py-2 rounded-lg text-center transition-all duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    className="flex-1 bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold py-2 rounded-lg text-center transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
