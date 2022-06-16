import React from "react";
import { MdDelete } from "react-icons/md";
import "../assets/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEdit } from "react-icons/ai";


const TaskList = ({ todos,setTodos, setEditTask }) => {

  if(todos.length < 1){
      return(
          <div style={{ marginBottom: '10vh'}}>
              <h1>Your Task Bar</h1>
              <p className="text-center">Is currently empty</p>
          </div>
      )
  }

  const deleteTask = (id) =>{
    setTodos(todos.filter((item) => item.id !== id))
    toast.error("Selected task is removed!");
  }

  const handleEdit = ({id}) =>{
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTask(findTodo)
  }

  return (
    <div>
     <ToastContainer />
       {todos.map((todo) => (
         <div className="d-flex align-items-center mb-4" key={todo.id}>
          <input value={todo.title} type="text" className="form-control valueInput" />
          <div>
            <AiFillEdit className="delete" onClick={() => handleEdit(todo)} />
            <MdDelete className="delete" onClick={()=> deleteTask(todo.id)} />
          </div>
         </div>
      ))}
      </div>
  );
};

export default TaskList;
