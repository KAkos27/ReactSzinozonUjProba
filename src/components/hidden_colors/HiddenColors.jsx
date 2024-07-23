import "./HiddenColors.css";

const HiddenColors = ({ hiddenColors }) => {
  return (
    <div className="hidden-colors">
      {hiddenColors.map((color, i) => (
        <span key={"h" + i} className={color}></span>
      ))}
    </div>
  );
};

export default HiddenColors;
