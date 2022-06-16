import React, { useEffect } from "react";
import "../assets/style.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ input,setInput, todos, setTodos, editTask,setEditTask }) => {


  useEffect(() =>{
    if(editTask){
      setInput(editTask.title)
    }else{
      setInput("")
    }
  },[setInput,editTask])
  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const updateTask = ( title, id ) =>{
    const newTask = todos.map((todo) =>{
      return todo.id === id ? { title, id } : todo;
  })
    setTodos(newTask)
    setEditTask("")
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!editTask){
      setTodos([...todos,{ id: new Date().getTime().toString(), title: input}])
      setInput('')
      toast.success('Your New Task is saved!')
    }
    else{
      updateTask(input, editTask.id)
      toast.success('Task Edited Successfully!')
    }
  }

  return (
    <>
      <ToastContainer />
          <form>
            <div className="d-flex">
              <input
                value={input}
                type="text"
                placeholder="Add task..."
                className="form-control"
                onChange={handleChange}
              />
              <button className="crudBtn" onClick={handleSubmit}>
                Add <AiFillPlusCircle className="icon" />
              </button>
            </div>
          </form>
    </>
  );
};

export default Form;
