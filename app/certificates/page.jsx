"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../components/ui/button";

// ===== Certificate Data =====
const certificatesData = {
  basic: [
    {
      title: "C.I.T 1st Semester",
      img: "/Assets/certificate_image/CIT-1st-sem.jpg",
      desc: "Successfully completed C.I.T 1st Semester covering MS Office, computer fundamentals, internet basics, and essential IT skills."
    },
    {
      title: "C.I.T 2nd Semester",
      img: "/Assets/certificate_image/CIT-2nd.jpg",
      desc: "Successfully completed C.I.T 2nd Semester including hardware fundamentals, networking basics, OS installation, and introductory programming."
    },
    {
      title: "Inpage",
      img: "/Assets/certificate_image/inpage.jpg",
      desc: "Successfully Completed Urdu Language"
    }
  ],
  technical: [
    {
      title: "Aptech Diploma",
      img: "/Assets/certificate_image/sem-1.jpg",
      desc: "Mastered utility-first design patterns with responsive UI."
    },
    {
      title: "Aptech Diploma",
      img: "/Assets/certificate_image/semester2.jpg",
      desc: "Developed scalable backend APIs with Node & Express."
    },
    {
      title: "Aptech Diploma",
      img: "/Assets/certificate_image/semester3.jpg",
      desc: "Learned data modeling and aggregation pipeline in MongoDB."
    },
    {
      title: "Aptech Diploma",
      img: "/Assets/certificate_image/semester4.jpg",
      desc: "Completed UI/UX fundamentals including modern design systems."
    },
    {
      title: "Full Stack Web Dev",
      img: "/Assets/certificate_image/semester5.jpg",
      desc: "End-to-end full stack development experience with MERN."
    },
    {
      title: "Attendance",
      img: "/Assets/certificate_image/Attend.jpg",
      desc: "Learned client communication & professional project delivery."
    },
    {
      title: "Software Engineering Diploma - Aptech (In Progress)",
      img: "/Assets/Images/pending.avif",
      desc: "Final semester of Aptech Software Engineering Diploma is in progress; certificate will be issued upon successful completion."
    },
  ],
  graphic: [
    {
      title: "Photoshop Basics",
      img: "/certificates/graphic1.jpg",
      desc: "Learned layers, masking, and basic photo editing."
    },
    {
      title: "Illustrator Fundamentals",
      img: "/certificates/graphic2.jpg",
      desc: "Vector graphics and design principles."
    },
    {
      title: "Figma UI/UX",
      img: "/certificates/graphic3.jpg",
      desc: "Designed interactive prototypes and user interfaces."
    }
  ]
};

// ===== Main Component =====
export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("basic");
  const [zoomCertificateIndex, setZoomCertificateIndex] = useState(null);

  const certificates = certificatesData[activeCategory];

  const openModal = (index) => setZoomCertificateIndex(index);
  const closeModal = () => setZoomCertificateIndex(null);

  const showPrev = () => {
    setZoomCertificateIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setZoomCertificateIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="certificates" className="px-6 md:px-16 lg:px-24 py-24 bg-gray-100 dark:bg-[#0b0b75] transition-colors duration-500 min-h-screen">
      
      {/* ===== Section Title ===== */}
      <div className="text-center mb-12">
       <h1
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
  style={{
    backgroundImage: "var(--hero-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Certificates & Achievements
</h1>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of my achievements, technical skills, and certifications acquired over time.
        </p>
      </div>

      {/* ===== Category Buttons ===== */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["basic", "technical", "graphic"].map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* ===== Certificates Grid ===== */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-60 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ===== Zoom Modal ===== */}
      {zoomCertificateIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-[#1E1E2F]"
          >
            <Image
              src={certificates[zoomCertificateIndex].img}
              alt={certificates[zoomCertificateIndex].title}
              width={1000}
              height={600}
              className="w-full h-auto object-contain"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-5">
              <h3 className="text-2xl font-bold">{certificates[zoomCertificateIndex].title}</h3>
              <p className="mt-2 text-sm">{certificates[zoomCertificateIndex].desc}</p>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
              >
                Close
              </Button>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <Button
                onClick={showPrev}
                className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded-full"
              >
                ◀
              </Button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <Button
                onClick={showNext}
                className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded-full"
              >
                ▶
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
