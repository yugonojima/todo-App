import React from "react";
import "./input.css";
function Input({ onAdd }) {
  const [text, setText] = React.useState("");
  //enterを押したときの処理
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };
  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}
export default Input;
