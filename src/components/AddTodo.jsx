import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ height: "40px", width: "280px" }}
        />
        <button type="submit" style={{ height: "45px", width: "80px" }}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
