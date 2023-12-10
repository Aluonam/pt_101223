import React, { useState } from 'react'

const ChangeColor = () => {

    const [colorSelected, setColorSelected] = useState("#000000")

  return (
    <div>
        {colorSelected}
        <input type='color' onChange={(e)=>{setColorSelected(e.target.value)}}></input>
    </div>
  )
}

export default ChangeColor