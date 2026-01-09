"use client";
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Category Badge */}
        <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold bg-[var(--accent-color)] text-white">
          {project.category}
        </span>

        {/* Action Buttons */}
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
    </div>
  );
}
