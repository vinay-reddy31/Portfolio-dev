import "./index.css";

const SkillItem = (props) => {
  const { eachItem } = props;
  const { title, imageUrl } = eachItem;
  return (
    <div className="skill-item">
      <img className="skill-icon" src={imageUrl} alt={title} />
      <p className="skill-name">{title}</p>
    </div>
  );
};
export default SkillItem;
