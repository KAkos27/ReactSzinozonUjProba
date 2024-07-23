import "./ControlPanel.css";

const ControlPanel = ({ onColorPick, onNewGame, colors }) => {
  return (
    <div className="control-panel">
      <button id="new-game" onClick={onNewGame}>
        Új Játék!
      </button>
      <div className="colors">
        {colors.map((color, i) => (
          <button
            key={"b" + i}
            id={color}
            className={color}
            onClick={onColorPick}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
