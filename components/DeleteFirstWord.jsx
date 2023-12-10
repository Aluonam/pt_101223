import React, { useState } from 'react'

const DeleteFirstWord = () => {

    const [inputSentence, setInputSentence] = useState([])
  return (
    <div>
        <h3>Delete first word</h3>
        {inputSentence}
        <input onChange={(e)=>{setInputSentence(e.target.value)}}></input>
        <button onClick={()=>{}}>Delete</button>
    </div>
  )
}

export default DeleteFirstWord