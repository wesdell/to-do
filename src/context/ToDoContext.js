import { createContext, useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/toDoReducer";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <ToDoContext.Provider value={[state, dispatch]}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoProvider };
export default ToDoContext;
