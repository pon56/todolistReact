import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onclickDelete } = props;

  return (
    <div className="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onclickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
