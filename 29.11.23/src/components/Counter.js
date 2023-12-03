import React from 'react';

const Counter=({counter,updateCounter})=>{
    return(
        <div>
            <h1>Counter</h1>
            <button onClick={()=>updateCounter(counter+1)}>+</button>
            <button>-</button>
            {counter}
        </div>
    )
}

export default Counter;