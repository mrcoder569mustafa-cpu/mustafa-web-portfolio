"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { skillsInfo } from "@/constants/skillsInfo";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 lg:px-24 py-24 bg-gray-100 dark:bg-[#090997] transition-colors duration-500 min-h-screen"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
       <h2
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-500"
    style={{
      backgroundImage: "var(--hero-gradient)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    My Skills
  </h2>

       <div className="w-28 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full border border-radius-10"></div>
        <p className="text-lg md:text-xl mt-4 font-medium text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through projects and real-world experience.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 justify-center">
        {skillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-200 dark:bg-gray-800 backdrop-blur-md p-6 sm:p-8 rounded-2xl 
                       shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full sm:w-[48%] md:w-[30%]"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              glareEnable
              glareMaxOpacity={0.2}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 
                               rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg 
                               transition-shadow duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
                    />
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </span>

                    {skill.level && (
                      <span
                        className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          skill.level === "learning"
                            ? "bg-yellow-400 text-black"
                            : skill.level === "intermediate"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}
