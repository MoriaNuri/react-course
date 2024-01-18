import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import mock from '../mock.json'
const About=()=> {
  const style={
    display:'flex',
    flexWrap:'wrap',
    gap:'18px'
  }
    const [peoples, setPeoples] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [count, setCount] = useState([])
    const [name,cart,setCart] = useOutletContext();
    console.log(setCart);
    console.log(cart);
    console.log(name);
    const  fetchPeople=async()=>{
        try{
   
        const res= await fetch('https://swapi.dev/api/people/')
        console.log(res);
        const data= await res.json()
      
        console.log(data);
        setPeoples(data.results)
        setCount(data.count)
        }
        catch(err){
          console.log(err);
        }
      }

      useEffect(() => {
        fetchPeople()
      }, [])
const handleSearch=(e)=>{
  e.preventDefault()
  const search=e.target.elements['search'].value
  setSearchQuery(search)
}
const filterData=mock.filter((item)=>{
  return item.title.toLowerCase().includes(searchQuery.toLowerCase())
}
)
      return(
    <div>
        <h1>About</h1>
        <form onSubmit={handleSearch}>
          <input type="text" id="search" placeholder="search item" />
          <button type="submit">search</button>
        </form>
        <div style={style}>

        {
          filterData.map((item)=>{
            return(
              <div style={{width:400,height:400}} onClick={()=>setCart(prev=>[...prev,item])}>
                <h2>{item.title}</h2>
          <img src={item.image} alt={item.name} width={300} height={300} />
        
              </div>
            )
          })
        }
        </div>
        <Outlet
        context={[count,name]}
        />
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    )
      }

export default About