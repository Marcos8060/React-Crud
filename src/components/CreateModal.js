import React from 'react'
import '../assets/style.css'
import { AiFillPlusCircle } from 'react-icons/ai'

const CreateModal = () => {
  return (
    <div>
        <button className='crudBtn'>Add a task <AiFillPlusCircle className='icon' /></button>
    </div>
  )
}

export default CreateModal