import React from "react";
import "./filter.css";
import classNames from 'classnames';
function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault(); //←なんの意味があるのだろう？
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames({ "is-active": value === "ALL" })}
      >
        All
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "TODO")}
        className={classNames({ "is-active": value === "TODO" })}
      >
        Todo
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "DONE")}
        className={classNames({ "is-active": value === "DONE" })}
      >
        Done
      </a>
    </div>
  );
}

export default Filter;
