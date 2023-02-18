import { useContext } from "react";
import { Outlet } from "react-router";
import ToDoContext from "../../context/ToDoContext";
import Goal from "./Goal";

const List = () => {
  const [state] = useContext(ToDoContext);

  return (
    <>
      {state.order.map((id) => (
        <Goal key={id} {...state.objects[id]}></Goal>
      ))}
      <Outlet />
    </>
  );
};

export default List;
