import React, { useCallback, useContext } from "react";
import TodosContext, { ACTIONS } from "./TodosContext";

const Activity = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);

  const handleToggle = useCallback(
    () => dispatch({ type: ACTIONS.TOGGLE, payload: todo.id }),
    [todo, dispatch]
  );
  const handleDelete = useCallback(
    () => dispatch({ type: ACTIONS.DELETE, payload: todo.id }),
    [todo, dispatch]
  );

  return (
    <li style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
      {todo.title}
      <div>
        <button id="done" onClick={handleToggle}>
          <img alt="done" src="/correct-symbol.svg" />
        </button>

        <button id="delete" onClick={handleDelete}>
          <img alt="delete" src="/cancel-mark.svg" />
        </button>
      </div>
    </li>
  );
};

export default Activity;
