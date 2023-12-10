import React, { useState } from 'react'

const ChangeColor = () => {

    const [colorSelected, setColorSelected] = useState("#000000")

  return (
    <div>
        <input type='color' onChange={(e)=>{console.log(e.target.value)}}></input>
    </div>
  )
}

export default ChangeColor