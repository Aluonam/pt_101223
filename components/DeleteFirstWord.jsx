import React, { useState } from 'react'

const DeleteFirstWord = () => {

    const [inputSentence, setInputSentence] = useState([])

    const handleDelete = ()=>{
        const words = inputSentence.split(" ")
        words.shift()
        setInputSentence( words.join(" "))
    }

  return (
    <div>
        <h3>Delete first word</h3>
        <input onChange={(e)=>{setInputSentence(e.target.value)}}></input>
        <button onClick={()=>{handleDelete()}}>Delete</button>
        <br/>
        {inputSentence}
    </div>
  )
}

export default DeleteFirstWord