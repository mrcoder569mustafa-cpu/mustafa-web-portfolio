"use client";
import React from "react";

// Final Portfolio Categories
const categories = [
  "All",
  "Web Development",
  "JavaScript",
  "React",
  "MERN",
  "UI/UX",
];

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="flex justify-center gap-4 flex-wrap mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform 
            ${
              active === category
                ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-transparent shadow-lg hover:scale-105 hover:brightness-110"
                : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:scale-105"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
