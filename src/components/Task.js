import React from "react";
import { MdDelete } from "react-icons/md";
import "../assets/style.css";
import { GlobalContext } from "../Context/context";

const Task = () => {
  const { finalData } = GlobalContext();

  if(finalData.length < 1){
      return(
          <div style={{ marginBottom: '10vh'}}>
              <h1>Your Task bar</h1>
              <p className="text-center">Is currently empty</p>
          </div>
      )
  }
  return (
    <div>
      {finalData.map((data) => (
        <>
          <div className="task__card">
            <h6>{data.task}</h6>
            <div className="row">
              <div className="col-md-8">
                <small>
                  {data.description}
                </small>
              </div>
              <div className="col-md-4 text-center">
                <MdDelete className="delete" />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Task;
