import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickeAdd, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "45px",
    padding: "8px",
    margin: "8px",
    bordeRradius: "8px"
  };

  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        disabled={disabled}
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickeAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
