import React, { useState } from 'react'

const InputDeleteWords = () => {

    const [dataInput, setDataInput] = useState([]);
    const [newSentence, setNewSentence] = useState()

    const handleDelete = ()=>{
        const newArr = structuredClone(dataInput.split(" "))
        const noRepeat = [...new Set(newArr)]
        setNewSentence(noRepeat.join(" "))
    }
  return (
    <div>
        <h3> Removes repeated words </h3>
        <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
        <br/>
        <button onClick={()=>{handleDelete()}}>Delete</button>
        <br/>
        {newSentence}
    </div>
  )
}

export default InputDeleteWords