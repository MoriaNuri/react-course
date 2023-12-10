import React from 'react'

const useCalc =(initialNumber)=>{
    const [number, setNumber] = React.useState(initialNumber)
    const [result, setResult] = React.useState(0)
const increment=()=>{
    setNumber(number+1)

}
const decrement=()=>{
    setNumber(number-1)
}
const square=()=>{
    setResult(number*number)
}

React.useEffect(() => {
  square()
}, [number])
    


    return[
        number,
        result,
        increment,
        decrement,
  ]
}

export default useCalc