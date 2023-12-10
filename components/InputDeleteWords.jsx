import React, { useState } from 'react'

const InputDeleteWords = () => {

    const [dataInput, setDataInput] = useState([]);

    const handleDelete = ()=>{
        console.log(dataInput)
    }
  return (
    <div>
        <h3> Removes repeated words </h3>
        <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
        <br/>
        <button onClick={()=>{handleDelete()}}>Delete</button>
    </div>
  )
}

export default InputDeleteWords