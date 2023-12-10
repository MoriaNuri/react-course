import React,{useState} from 'react'
import RandomColorButton from './RandomColorButton'
import { useCallback,useContext } from 'react'
import { useMemo } from 'react'
import { ThemeContext } from '../ThemeContext'

const RandomColorButtonPanel=()=> {
    const colors=useMemo(()=>['red','green','blue','yellow','orange','purple','pink','brown','black','white'],[])
    const [randomColor1, setRandomColor1] = useState(colors[0])
    const [randomColor2, setRandomColor2] = useState(colors[0])
    const getRandomColor=useCallback(()=>colors[Math.floor(Math.random()*(colors.length-1))],[colors])   
    const changeColor1=()=>{
        setRandomColor1(getRandomColor())
    }
    const changeColor2=useCallback(()=>{
        setRandomColor2(getRandomColor())
    },[getRandomColor])
    const {theme,toggleTheme}=useContext(ThemeContext)
    console.log(theme);
    return (
    <div style={{background:theme==='dark'? 'black':'white'}}>
        <h1 style={{color:theme==='dark'?'white':'black'}}>Title</h1>
    <RandomColorButton color={randomColor1} changeColor={changeColor1} />
    <RandomColorButton color={randomColor2} changeColor={changeColor2}/>
    <button onClick={toggleTheme}>{theme==='light'?'Dark mode':'Light Mode'}</button>
    </div>
  )
}

export default RandomColorButtonPanel