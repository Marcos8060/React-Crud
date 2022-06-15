import React, { useState, createContext,useContext } from 'react'

export const TaskContext = createContext();

const Context = ({ children }) =>{
    const [finalData,setFinalData] = useState([])


    return (
        <TaskContext.Provider value={{ 
            finalData,
            setFinalData
        }}>
            { children }
        </TaskContext.Provider>
    )
}


export default Context;

export const GlobalContext = () =>{
    return useContext(TaskContext)
}