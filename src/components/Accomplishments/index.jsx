import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./index.css"; // Import the CSS file
import Carousel from "../demo";

// const Button = ({ children, onClick }) => {
//   return (
//     <button className="custom-button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

const accomplishments = [
  {
    id: 1,
    image: "/btl.png",
    title: "Hackathon Winner 🏆",
    description:
      "Won the Bharth Tech League Hackathon 2024 featuring Creating innovative solutions with Artificial Intellingence in the space of Agriculture",
  },
  {
    id: 2,
    image: "/aws.png",
    title: "Amazon PartyRock Generative AI Hackathon",
    description:
      "Rewarded with $250 AWS Credits for Eligible Project and Oustanding Blogpost",
  },
  {
    id: 3,
    image: "/gssoc.png",
    title: "GSSOC Open Source Contributer 2024",
    description:
      "Successfully contributed to opensource projects with 3+ PR's Merged",
  },
  {
    id: 4,
    image: "/academic.png",
    title: "Academic Excellence Award",
    description:
      "Received Academic Excellene Certificate from The Head OF CS-AI and Dean of SR University",
  },
];

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Fundamentals",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/15yRqJf4U1DDO22b0rlPR_sDPXTlgcHyj/view",
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure AI Engineer Associate",
    date: "May 2024",
    link: "https://learn.microsoft.com/en-us/users/vinayarukala-9463/credentials/e014b62af6a93305?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: 3,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "May 2024",
    link: "https://drive.google.com/file/d/11kLK5ujsqg2zAywTR4DE622jLz1wBzyK/view",
  },
];

const PortfolioSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="portfolio-container">
      <h2 className="section-title">Accomplishments & Certifications</h2>
      <Carousel />

      {/* Accomplishments Section */}
      {/* <motion.div
        className="accomplishments-container"
        animate={isHovered ? { x: 0 } : { x: ["0%", "-100%"] }}
        transition={{
          repeat: isHovered ? 0 : Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        <div className="accomplishments-list">
          {accomplishments.map((item) => (
            <div
              key={item.id}
              className="accomplishment-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="accomplishment-img"
              />
              <h3 className="accomplishment-title">{item.title}</h3>
              <p className="accomplishment-description">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* Certifications Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-black shadow-lg rounded-lg p-5 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-violet-800">
              {cert.title}
            </h3>
            <p className="text-sm text-white-500 mt-2">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <BsFillPatchCheckFill className="text-lg" /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
