import React from 'react'

const ChangeColor = () => {


  return (
    <div>
        <input type='color' onChange={(e)=>{console.log(e.target.value)}}></input>
    </div>
  )
}

export default ChangeColor