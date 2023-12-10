import React from 'react'

const DeleteFirstWord = () => {
  return (
    <div>
        <h3>Delete first word</h3>
        <input onChange={(e)=>{e.target.value}}></input>
        <button onClick={()=>{}}>Delete</button>
    </div>
  )
}

export default DeleteFirstWord