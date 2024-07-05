import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <h1>TodoApp</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
