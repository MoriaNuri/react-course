import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

 const RandomColorButton = React.memo((props) => {
   const {color,changeColor}=props
   const {theme}=useContext(ThemeContext)
  return (
  <button onClick={changeColor} style={{margin:10,background:color, width:80,height:80,color:theme==='dark'?'black':'white'}} >BUTTON</button>
  )
})

export default RandomColorButton
