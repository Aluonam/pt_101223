import React from 'react'

const InputDeleteWords = () => {
  return (
    <div>
        <h3> Removes repeated words </h3>
        <input onChange={(e)=>{console.log(e.target.value)}}></input>
        <br/>
        <button onClick={()=>{}}>Delete</button>
    </div>
  )
}

export default InputDeleteWords