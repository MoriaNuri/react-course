import React from 'react'
import { useEffect,useState } from 'react'

const Peoples=()=> {
  const [peoples, setPeoples] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
    // then & catch
  // const fetchPeople=()=>{
  //   setIsLoading(true)
  //   setIsError(false)
  //   fetch('https://swapi.dev/api/people/')
  // .then((res)=>res.json())
  // .then((data)=>{
  //     setIsLoading(false)
  //     console.log(data);
  //     setPeoples(data.results)
  //   }).catch((err)=>{
  //     setIsLoading(false)
  //     setIsError(true)
  //     console.log(err);
  //   })

  // }

  //Async await
  const  fetchPeople=async()=>{
    try{
    setIsLoading(true)
    setIsError(false)
    const res= await fetch('https://swapi.dev/api/people/')
    console.log(res);
    const data= await res.json()
    setIsLoading(false)
    console.log(data);
    setPeoples(data.results)
    }
    catch(err){
      setIsLoading(false)
      setIsError(true)
      console.log(err);
    }
  }

    useEffect(() => {
    fetchPeople()
   }, [])

    console.log(peoples);
  return (
    <div> { peoples?.map((people)=>(
         <h1>{people.name}</h1>
      )
      )}
      {isLoading && <h1 >Loading...</h1>}
      {isError && <h1 style={{color:"red"}}>Error</h1>}
      </div>
  )
}

export default Peoples