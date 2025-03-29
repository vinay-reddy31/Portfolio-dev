import SkillItem from "../SkillItem";
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
      <h2 className="skills-section-heading">Skills</h2>
      <p className="skills-section-heading">Here are some of my skills.</p>
      <div className="skills-container">
        <div className="skills-section">
          <h2 className="skills-section-heading">Frotend</h2>
          <ul className="skills">
            {frotendSkills.map((eachItem) => (
              <SkillItem eachItem={eachItem} />
            ))}
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-section-heading">Backend</h2>
          <ul className="skills">
            {BackendSkills.map((eachItem) => (
              <SkillItem eachItem={eachItem} />
            ))}
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-section-heading">Coding Languages</h2>
          <ul className="skills">
            {CodingLanguages.map((eachItem) => (
              <SkillItem eachItem={eachItem} />
            ))}
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-section-heading">Tools & Technologies</h2>
          <ul className="skills">
            {ToolsandFrameworks.map((eachItem) => (
              <SkillItem eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
