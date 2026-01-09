"use client";
import React, { useState } from "react";
import { projectsData } from "@/constants/projectsData";
import ProjectCard from "@/component/ProjectCard";
import ProjectFilter from "@/component/ProjectFilter";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  //  Filter Logic
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-gray-100 dark:bg-[#0b0b75] transition-colors duration-500 min-h-screen">
      
{/* Section Title */}
<div className="text-center mb-12">
  <h1
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-500"
    style={{
      backgroundImage: "var(--hero-gradient)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    My Projects
  </h1>

  <div className="w-28 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>

  <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
    Explore some of my projects built using modern technologies.
  </p>
</div>


      {/* Filter Buttons */}
      <ProjectFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Projects Grid */}
      <motion.div
        key={activeCategory}
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={1000}
              glareEnable
              glareMaxOpacity={0.2}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <ProjectCard project={project} />
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* No Projects */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
          No projects found in this category.
        </p>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/showcase"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          View Full Showcase
        </a>
      </div>
    </section>
  );
}
