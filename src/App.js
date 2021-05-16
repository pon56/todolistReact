import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "../components/inputTodo";
import { IncompleteTodos } from "../components/incompleteTodos";
import { CompleteTodos } from "../components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickeAdd = () => {
    if (todoText === "") return;
    // newtodosという配列を新しく作ってその中に既存のtodoと新しいtodoを入れる
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);
    const NewCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(NewCompleteTodo);
  };

  const onClickReturn = (index) => {
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    const NewCompleteTodo = [...completeTodos];
    NewCompleteTodo.splice(index, 1);
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(NewCompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickeAdd={onClickeAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までです</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
