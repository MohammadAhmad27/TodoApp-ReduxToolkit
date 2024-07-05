import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "lightgray",
            }}
          >
            <h3 style={{ marginLeft: "15px" }}>{todo.text}</h3>
            <i
              className="fa-solid fa-trash"
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ marginTop: "20px", marginRight: "15px" }}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
