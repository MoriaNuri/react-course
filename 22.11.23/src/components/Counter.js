import React from 'react';


function Counter({counter,updateCounter}){

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={()=>updateCounter(counter+1)}>+</button>
            <button>-</button>
            {this.props.counter}
        </div>
    )
}

export default Counter;