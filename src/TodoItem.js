import React from "react";
import classNames from 'classnames';
import 'bulma/css/bulma.css'
function TodoItem({ item, onCheck }) {
  const handleChange = () => {
    onCheck(item); //←変更がありましたよと、親のコンポーネントに知らせている
  };
  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange}></input>
      <span
        className={classNames({
          "has-text-grey-light": item.done,
        })}
      >
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;
