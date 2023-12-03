import React from "react";

const Car  =(props)=>{
    const {car,updateCarSpeed
    }=props
    return(
        <div>
            <h1>{car.name}</h1>
            <p>{car.speed}</p>
            <p>{car.model}</p>
            <button onClick={()=>updateCarSpeed(car.speed+10,car.id)}>+</button>
            <button onClick={()=>updateCarSpeed(0,car.id)}>Restart speed</button>
        </div>
    )
}


export default Car