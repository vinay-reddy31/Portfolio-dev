import SkillItem from "../SkillItem";
import { motion } from "framer-motion";
import "./index.css";

const frotendSkills = [
  {
    title: "HTML",
    imageUrl: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
  },
  {
    title: "CSS",
    imageUrl: "https://img.icons8.com/?size=512&id=21278&format=png",
  },
  {
    title: "JavaScript",
    imageUrl: "https://img.icons8.com/?size=512&id=108784&format=png",
  },
  {
    title: "BootStrap",
    imageUrl: "https://img.icons8.com/?size=512&id=PndQWK6M1Hjo&format=png",
  },
  {
    title: "React JS",
    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
  },
];

const BackendSkills = [
  {
    title: "MongoDB",
    imageUrl:
      "https://th.bing.com/th?id=ODLS.4ec66894-850d-4692-b51b-d3304cbf4bcd&w=32&h=32&o=6&pid=AdsPlus",
  },
  {
    title: "Node Js",
    imageUrl: "https://nodejs.org/static/logos/nodejsLight.svg",
  },
  {
    title: "Express Js",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:552/1*5y334csCSm6P4ISP4uYzhg.png",
  },
  {
    title: "Sqlite",
    imageUrl:
      "https://logos-download.com/wp-content/uploads/2018/09/SQLite_Logo.png",
  },
  {
    title: "MySql",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
];

const CodingLanguages = [
  {
    title: "C",
    imageUrl: "https://img.icons8.com/?size=512&id=shQTXiDQiQVR&format=png",
  },
  {
    title: "C++",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    title: "Python",
    imageUrl: "https://img.icons8.com/color/48/000000/python.png",
  },
  {
    title: "Java",
    imageUrl: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
];

const ToolsandFrameworks = [
  {
    title: "Git",
    imageUrl:
      "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
  },
  {
    title: "Github",
    imageUrl:
      "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  },
  {
    title: "AWS",
    imageUrl:
      "https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000",
  },
  {
    title: "Azure",
    imageUrl: "https://img.icons8.com/?size=512&id=VLKafOkk3sBX&format=png",
  },
  {
    title: "Vs Code",
    imageUrl:
      "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
  },
  {
    title: "PowerBI",
    imageUrl:
      "https://pnghq.com/wp-content/uploads/power-bi-logo-and-sign-png-high-resolution.png",
  },
];

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <p className="skills-section-para">Here are some of my skills.</p>
      <div className="skills-container">
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="skills-section-heading">Frontend</h2>
          <ul className="skills">
            {frotendSkills.map((eachItem, index) => (
              <motion.li
                key={eachItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <SkillItem eachItem={eachItem} />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="skills-section-heading">Backend</h2>
          <ul className="skills">
            {BackendSkills.map((eachItem, index) => (
              <motion.li
                key={eachItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillItem eachItem={eachItem} />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="skills-section-heading">Coding Languages</h2>
          <ul className="skills">
            {CodingLanguages.map((eachItem, index) => (
              <motion.li
                key={eachItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillItem eachItem={eachItem} />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="skills-section-heading">Tools & Technologies</h2>
          <ul className="skills">
            {ToolsandFrameworks.map((eachItem, index) => (
              <motion.li
                key={eachItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <SkillItem eachItem={eachItem} />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
export default Skills;
