"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function HireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", category: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  if (!isOpen) return null;

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return toast.error("Fill all fields!");
    if (!isValidEmail(formData.email)) return toast.error("Invalid email!");
    if (!formData.category) return toast.warning("Select a category!");
    if (!executeRecaptcha) return toast.error("reCAPTCHA not loaded!");

    setLoading(true);
    try {
      const token = await executeRecaptcha("hire_form_submit");
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Request sent successfully!");
        setFormData({ name: "", email: "", category: "", message: "" });
        onClose();
      } else toast.error(data.message || "Failed to send request!");
    } catch {
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-200/80 via-white/70 to-slate-300/80 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm">
        <div className="relative w-[92%] max-w-md max-h-[75vh] overflow-y-auto rounded-3xl p-6 pt-16 bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 shadow-2xl backdrop-blur-xl">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 shadow-xl">
            <User className="h-10 w-10 text-indigo-500" />
          </div>

          <button onClick={onClose} className="absolute top-4 right-4 text-red-500 text-xl font-bold hover:scale-110 transition">✕</button>

          <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100">Hire Me</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
              <option value="">Choose Category</option>
              <option>Web Development</option>
        
              <option>UI/UX Design</option>
              <option>Portfolio Website</option>
              <option>Bug Fixing</option>
              <option>Other</option>
            </select>
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            <div className="flex justify-center pt-2">
              <button type="submit" disabled={loading} className="w-72 px-6 py-3 rounded-2xl text-white font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg shadow-indigo-500/30 hover:scale-105 hover:brightness-110 transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2">
                {loading ? "Sending..." : "Send Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
