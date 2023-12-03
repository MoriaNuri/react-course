import useCalc from "../hooks/useCalc"

const Calc =()=>{
// Inline style 
    const styles={
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        padding:'8px',
        border:'1px solid black',
        boxShadow:'0 0 10px rgba(0,0,0,0.5)',
    }
// Custom Hook
    const [number, result, increment, decrement]= useCalc(1)
    return(
        <div style={styles}>
            <span>{number}</span>
            <button $red onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <span>Result of Square{result}</span>
        </div>
           
    )
}

export default Calc