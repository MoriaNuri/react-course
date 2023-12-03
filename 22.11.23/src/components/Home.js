import * as React from 'react';
import Car from './Car';
import Counter from './Counter';



  // Class component

// class Home extends React.Component {
//   state={
//   display:"counter",
//   user:"אורח",    
//   counter:0,
//   car:{
//   name:"Ford",
//   speed:200,
//   model:"Mustang"
//   },
// }
//   inputUser=React.createRef()
//   updateSpeed=(newSpeed)=>{
//    this.setState({
//     car:{
//     ...this.state.car,
//     speed:newSpeed
//     }
//    })
//   }
//   componentDidUpdate(){
//     console.log('Home did update')
//   }
//   updateCounter=(newSpeed)=>{
//   this.setState({
//   counter:newSpeed
//   })}

//   updateUserName=()=>{
//   this.setState({
//     user:this.inputUser.current.value
//   })
// }
// updateDisplay=(newDisplay)=>{
//   this.setState({
//     display:newDisplay
//   })
// }

// render() {
//     return (
//      <div>
//       <button onClick={()=>this.updateDisplay('counter')}>Counter</button>|| 
//       <button onClick={()=>this.updateDisplay('car')}>Car</button>
//         <h1>Home</h1>
//         <p>Hello,{this.state.user} </p>
//         <p>My awesome Home component</p>
//         <input  type="text" ref={this.inputUser} placeholder='מה שמך?'/>
     
//         <button onClick={this.updateUserName} >שלח</button>
//         {this.state.display==='car'?<Car updateSpeed={this.updateSpeed} car={this.state.car} />:
//       <Counter counter={this.state.counter} updateCounter={this.updateCounter}/>}
//      </div>
//     );
//   }
// }


// Function component
const initialState={
  name:"Ford",
  speed:200,
  model:"Mustang"
  }

function Home() {
// useState hook
  const[counter,setCounter]=React.useState(0)
  const[car,setCar]=React.useState(initialState)

  const updateCounter=(newSpeed)=>{
  setCounter({
  counter:newSpeed
  })
}


    return (
     <div>
      <Counter counter={counter} updateCounter={updateCounter}/>
      <Car car={car} setCar={setCar} />
     </div>
    );
  
}


export default Home;
