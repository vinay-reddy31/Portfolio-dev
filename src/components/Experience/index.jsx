import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "SDE Intern",
    company: "Ruthi",
    duration: "Sep 2024 - Jan 2025",
    description:
      "Designed and developed an entire Recruiter dashboard to efficiently fetch and display all job-applied candidates, optimizing the end-to-end recruitment process through a responsive and user-friendly UI with mobile-first design principles.",
    image:
      "https://ruthiassets.blob.core.windows.net/static-assets/Ruthi_full_Logo.png",
  },
  {
    id: 2,
    role: "Summer Intern",
    company: "NITW",
    duration: "Jun 2024 - July 2024",
    description:
      "Developed a Content-Based Image Retrieval (CBIR) system, achieving 85% retrieval accuracy on a dataset of 1,000 images.",
    image: "https://www.nitw.ac.in/images/logo-170x172.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section px-4 md:px-6 py-12">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-gray-300 w-[2px] h-full hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Connector Dot */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center absolute md:left-1/2 transform md:-translate-x-1/2 shadow-lg border-4 border-white">
                <img
                  src={exp.image}
                  alt="Company Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`w-full md:w-1/2 p-4 md:p-6 border border-gray-300 rounded-lg shadow-md bg-white mt-10 md:mt-0 ${
                  index % 2 === 0 ? "md:ml-6" : "md:mr-6"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-black">
                  {exp.company}
                </h3>
                <p className="text-gray-800 font-medium">
                  {exp.role} |{" "}
                  <span className="text-gray-600">{exp.duration}</span>
                </p>
                <p className="text-gray-700 mt-2 text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
