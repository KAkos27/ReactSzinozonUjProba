import "./HiddenColors.css";

const HiddenColors = ({ hiddenColors, visible }) => {
  return (
    <div className="hidden-colors">
      {hiddenColors.map((color, i) => (
        <span
          key={"h" + i}
          className={color + (visible ? "" : " hidden")}
        ></span>
      ))}
    </div>
  );
};

export default HiddenColors;
