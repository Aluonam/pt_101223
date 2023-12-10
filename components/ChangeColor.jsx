import React, { useState } from 'react'
import ButtonModalANT from './ButtonModalANT'

const ChangeColor = () => {

    const [colorSelected, setColorSelected] = useState("#000000")

  return (
    <div>
        <input type='color' onChange={(e)=>{setColorSelected(e.target.value)}}></input>
        <ButtonModalANT colorSelected={colorSelected}></ButtonModalANT>
    </div>
  )
}

export default ChangeColor