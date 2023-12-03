import * as React from 'react';
import Car from './Car';

// list& key

const initialState=[
  {
    name:"Ford",
    speed:200,
    model:"Mustang",
    id:1
  },
  {
    name:"Toyota",
    speed:150,
    model:"Corolla",
    id:2
  },
  {
    name:"Honda",
    speed:180,
    model:"Civic",
    id:3
  }
]

const Home = () => {
const [cars, setCars] = React.useState(initialState)

const updateCarSpeed=(newSpeed,id)=>{
  console.log('updateCarSpeed',newSpeed,id);
  setCars(
    cars.map((car)=>{
      if(car.id===id){
        return{
          ...car,
          speed:newSpeed
        }
      }
      return car
    })
  )
 
}
React.useEffect(() => {
  console.log('unmounted');

  return () => {
    console.log('cleanup');
  }
}, [])


  return (
    <div >
      {cars.map((car)=>(
        <Car  car={car}  updateCarSpeed={updateCarSpeed} />
      )
      )}
    </div>
  );
};

export default Home;
