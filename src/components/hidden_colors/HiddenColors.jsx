const HiddenColors = ({ hiddenColors }) => {
  return (
    <div className="hidden-colors">
      {hiddenColors.map((color, i) => (
        <span key={"h" + i} className={color}>
          asd
        </span>
      ))}
    </div>
  );
};

export default HiddenColors;
