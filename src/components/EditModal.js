import React from 'react'
import '../assets/style.css'
import { AiFillEdit } from 'react-icons/ai'


const EditModal = () => {
  return (
    <div>
        <button className='crudBtn'>Edit task <AiFillEdit className='icon' /></button>
    </div>
  )
}

export default EditModal