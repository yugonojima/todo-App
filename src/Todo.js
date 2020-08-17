import React from "react";
import "./Todo.css";
import Input from "./Input";
import Filter from "./Filter";
import TodoItem from "./TodoItem";
function Todo() {
  const [items, setitems] = React.useState([]);
  const [filter, setfilter] = React.useState("ALL");

  const handleCheck = (checkeditem) => {
    const newItems = items.map((item) => {
      if (item.key === checkeditem.key) {
        item.done = !item.done;
      }
      return item;
    });
    setitems(newItems);
  };

  const handleAdd = (text) => {
    setitems([...items, { key: items.length, text, done: false }]);
  };

  const handleFilterChange = (value) => {
    setfilter(value);
  };

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });
  return (
    <div className="panel">
      <div className="panel-heading">React ToDo</div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayItems.map((item) => (
        <TodoItem item={item} key={item.key} onCheck={handleCheck} />
      ))}

      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
}

export default Todo;
