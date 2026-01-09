"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "/skills" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/90 dark:bg-[#1E1E2F]/80 shadow-lg"
          : "bg-white dark:bg-[#1E1E2F]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Mustafa
          <span className="font-light text-gray-700 dark:text-gray-300">Dev</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label + idx}
              href={link.href}
              className="relative group hover:text-cyan-500 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Actions + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/contact">
            <button
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none dark:border-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 hover:dark:bg-neutral-700"
            >
              Let's Connect
            </button>
          </a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/95 dark:bg-[#1E1E2F]/95 backdrop-blur-md px-6 py-4 space-y-3 text-center text-gray-800 dark:text-gray-200 rounded-b-lg shadow-lg"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.label + idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-cyan-500 rounded-md transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full mt-2 border-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Hire Me
          </button>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mt-2 p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-300" />
            )}
          </button>
        </motion.nav>
      )}
    </motion.header>
  );
}
