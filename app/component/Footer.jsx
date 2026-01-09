"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/footer-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.message || "Failed to send");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <footer className="border-t border-gray-300 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-200 relative">
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide mb-3 text-blue-500">
            Muhammad Raza
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Frontend Developer • MERN Stack <br />
            Building modern, scalable & elegant web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Services", "Showcase", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
                  text-white font-medium shadow-md hover:scale-105 hover:opacity-90
                  transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full p-3 text-white text-2xl">
              <FiUser />
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4 text-center text-blue-500">Contact Me</h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2
              text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            />

            <textarea
              placeholder="Your Message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2
              text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            />

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="inline-flex w-full md:w-72 items-center justify-center rounded-xl
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
                  text-white font-semibold px-6 py-3 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <span>Send Message</span>
                <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="text-center text-xs py-4 border-t border-gray-300 text-gray-500 dark:text-gray-400">
        @ {year} Muhammad Raza. All rights reserved.
      </div>
    </footer>
  );
}
