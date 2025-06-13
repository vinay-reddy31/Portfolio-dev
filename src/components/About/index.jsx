import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about-section flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Profile Image */}
      <div className="about-image w-48 h-48 md:w-60 md:h-60 flex-shrink-0 hidden md:block">
        <img
          src="/profilepic.png"
          alt="Profile"
          className="w-42 h-76  rounded-full shadow-lg hidden md:block"
        />
      </div>

      {/* About Me Content */}
      <div className="about-content max-w-xl text-center md:text-left">
        <h2 className="about-me-heading text-3xl font-bold mb-4">About Me</h2>
        <p className="about-me-description leading-relaxed">
          My learning journey with{" "}
          <strong>3 years of experience in Web Development</strong>, where I
          built <strong>interactive and dynamic websites</strong> from{" "}
          <strong>To-Do Applications</strong> to{" "}
          <strong>E-commerce platforms</strong> using{" "}
          <strong>HTML, CSS, JavaScript, and React.js</strong>. Additionally, I
          developed a <strong>Chronic Disease Prediction System</strong> using{" "}
          <strong>Data Science and Machine Learning techniques</strong>. My goal
          is to integrate <strong>AI & Web Development</strong> to solve{" "}
          <strong>real-world challenges</strong>. I am eager to contribute,{" "}
          <strong>collaborate</strong>, and{" "}
          <strong>learn new technologies</strong>!
        </p>

        {/* Download CV Button */}
        {/* <a href="your-cv-url-here.pdf" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Download CV
        </a> */}
      </div>
    </motion.section>
  );
};

export default About;
