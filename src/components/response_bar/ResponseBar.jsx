import "./ResponseBar.css";

const ResponseBar = ({ responses }) => {
  return (
    <div className="response-bar">
      {responses.map((response, i) => (
        <span key={"r" + i} className={"response " + response}></span>
      ))}
    </div>
  );
};

export default ResponseBar;
