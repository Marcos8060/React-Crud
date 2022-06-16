import React from "react";
import { MdDelete } from "react-icons/md";
import "../assets/style.css";
import { GlobalContext } from "../Context/context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = () => {
  const { finalData, setFinalData } = GlobalContext();

  if(finalData.length < 1){
      return(
          <div style={{ marginBottom: '10vh'}}>
              <h1>Your Task bar</h1>
              <p className="text-center">Is currently empty</p>
          </div>
      )
  }

  const deleteTask = (id) =>{
    setFinalData(finalData.filter((item) => item.id !== id))
    toast.info("Selected task is removed!");
    console.log('clicked');
  }

  return (
    <div>
     <ToastContainer />
      {finalData.map((data) => (
        <>
          <div className="task__card" key={data.id}>
            <h6>{data.task}</h6>
            <div className="row">
              <div className="col-md-8">
                <small>
                  {data.description}
                </small>
              </div>
              <div className="col-md-4 text-center">
                <MdDelete onClick={()=> deleteTask(data.id)} className="delete" />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Task;
