import React from 'react'
import { MdDelete } from 'react-icons/md'
import '../assets/style.css'

const Task = () => {
  return (
    <div>
        <div className="task__card">
            <h6>Go to the gym</h6>
            <div className='row'>
               <div className="col-md-8">
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur eum mollitia amet nihil ipsam omnis a facere recusandae unde!</small>
               </div>
               <div className="col-md-4 text-center">
              <MdDelete className='delete' />
               </div>
            </div>
        </div>
        <div className="task__card">
            <h6>Go to School</h6>
            <div className='row'>
               <div className="col-md-8">
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur eum mollitia amet nihil ipsam omnis a facere recusandae unde!</small>
               </div>
               <div className="col-md-4 text-center">
              <MdDelete className='delete' />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Task