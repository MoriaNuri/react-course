import React from "react";

class Car extends React.Component{

    render(){
    return(
        <div>
            <h1>{this.props.car.name}</h1>
            <p>{this.props.car.speed}</p>
            <p>{this.props.car.model}</p>
            <button onClick={()=>this.props.updateSpeed(this.props.car.speed+10)}>+</button>
            <button onClick={()=>this.props.updateSpeed(0)}>Restart speed</button>
        </div>
    )
}
}

export default Car