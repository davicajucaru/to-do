import React, { useCallback, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/Activities.css";
import Activity from "./Activity";
import ButtonAdd from "./ButtonAdd";
import InputActivity from "./InputActivity";
import TodosContext, { ACTIONS } from "./TodosContext";

const Activities = (props) => {
  const [value, setValue] = useState("");

  const { todos, dispatch } = useContext(TodosContext);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const uuid = uuidv4();

      dispatch({
        type: ACTIONS.ADD,
        payload: { title: value, isCompleted: false, id: uuid },
      });

      setValue("");
    },
    [value, dispatch]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputActivity value={value} setValue={setValue} />
        <ButtonAdd value={value} />
      </form>
      <ul>
        {todos.map((todo) => (
          <Activity todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default Activities;
