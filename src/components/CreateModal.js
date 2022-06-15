import React, { useState } from "react";
import "../assets/style.css";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../Context/context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreateModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { finalData, setFinalData } = GlobalContext();
  const [userData,setUserData] = useState({
      description : '',
      task : '',
  })

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name,value);
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(userData.task && userData.description){
      const newTask = {...userData,id: new Date().getTime().toString()}
      setFinalData([...finalData,newTask])
      setUserData({ task:'', description:''})
      setShow(false)
      toast.success("Your task is added successfully!");
    }
  }

  return (
    <>
     <ToastContainer />
      <button className="crudBtn" onClick={handleShow}>
        Add a task <AiFillPlusCircle className="icon" />
      </button>
      <Modal show={show} onHide={handleClose} id='myModal'>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <form>
            <input
              value={userData.task}
              name='task'
              type="text"
              className="form-control"
              placeholder="Enter task..."
              onChange={handleChange}
            />
            <textarea
              value={userData.description}
              name='description'
              id=""
              cols="30"
              rows="4"
              className="form-control mt-4"
              placeholder="Give a description..."
              onChange={handleChange}
            ></textarea>
            <button type="button" className="addBtn" onClick={handleSubmit}>
              Add Task
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateModal;
