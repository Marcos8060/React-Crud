import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/Task";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="app__body">
        <h1 className="text-decoration-underline text-center text-uppercase">My Task List</h1>
      <div className="container">
        <div className="col-md-7 text-center taskCard">
        <div className="py-4">
          <small>You have ({todos.length}) Uncompleted Tasks</small>
          <Form
            editTask={editTask}
            setEditTask={setEditTask}
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <TaskList
            editTask={editTask}
            setEditTask={setEditTask}
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
