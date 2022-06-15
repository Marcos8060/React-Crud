import React,{useState} from "react";
import "../assets/style.css";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';


const CreateModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="crudBtn" onClick={handleShow}>
        Add a task <AiFillPlusCircle className="icon" />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
            <form>
               <input type="text" className="form-control" placeholder="Enter task..." />
               <textarea name="" id="" cols="30" rows="4" className="form-control mt-4" placeholder="Give a description..."></textarea>
               <button type="button" class="addBtn">Add Task</button>
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateModal;
