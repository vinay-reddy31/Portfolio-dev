import React from "react";
import "./index.css";

const About = () => {
  return (
    <section className="about-section flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12">
      {/* Profile Image */}
      <div className="about-image w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
        <img
          src="https://hemangnakarani.github.io/astro/ssa.DaGceUPd_Z2wtw7E.svg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* About Me Content */}
      <div className="about-content max-w-xl text-center md:text-left">
        <h2 className="about-me-heading text-3xl font-bold mb-4">About Me</h2>
        <p className="about-me-description leading-relaxed">
          My learning Journey with{" "}
          <strong>3 years of experience in Web Development</strong>, where I
          built **interactive and dynamic websites** from **To-Do Applications**
          to **E-commerce platforms** using **HTML, CSS, JavaScript, and
          React.js**. Additionally, I developed a **Chronic Disease Prediction
          System** using **Data Science and Machine Learning techniques**. My
          goal is to integrate **AI & Web Development** to solve **real-world
          challenges**. I am eager to contribute, **collaborate**, and **learn
          new technologies**!
        </p>

        {/* Download CV Button */}
        {/* <a href="your-cv-url-here.pdf" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Download CV
        </a> */}
      </div>
    </section>
  );
};

export default About;
