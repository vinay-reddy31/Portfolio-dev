import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Created an Interactive Portfolio",
    category: "Web",
    github: "#",
    live: "#",
    image:
      "https://i2.wp.com/fribly.com/wp-content/uploads/2019/03/Free-Personal-Portfolio-Template.png?fit=1516%2C1516&ssl=1",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "An Ecommerce Web Application enables the user to browse through the products and add them to the cart.",
    category: "Web",
    github: "#",
    live: "#",
    image:
      "https://th.bing.com/th/id/OIP.zJ56fxZnSrg7Tc_oL6MTOQHaE7?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Ecom-Tracker",
    description:
      "An Ecom tracker Application enables the user to track the products and get notified when the price drops.",
    category: "Finance",
    github: "#",
    live: "#",
    image:
      "https://th.bing.com/th/id/OIP.NTYOIFTVbAuBCIt7BsXaDQHaD3?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A Todos Web Application enables the user to add, delete and mark the todos as completed.",
    category: "Web",
    github: "#",
    live: "#",
    image:
      "https://th.bing.com/th/id/OIP.VO_Jm-fX2jD11f_qDvOB4QHaFT?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    title: "Book Recommendation System",
    description:
      "Developed a Book trecommendation System where user get Top % Recommendations based on the book chosen",
    category: "AIML",
    github: "#",
    live: "#",
    image:
      "https://th.bing.com/th/id/OIP.EnOy3-5IcV9Zi9yJRYdATgAAAA?rs=1&pid=ImgDetMain",
  },
];

const categories = ["All", "Web", "Finance", "AIML"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="flex justify-center space-x-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg h-50 w-160"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-xl mt-4">{project.description}</p>
            <div className="flex justify-between mt-3">
              <a
                href={project.github}
                className="text-blue-400 hover:text-blue-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={project.live}
                className="text-green-400 hover:text-green-300"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
