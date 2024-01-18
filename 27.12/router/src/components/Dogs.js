import { useEffect,useState } from "react";
import { Link,useNavigate , Navigate, Outlet} from "react-router-dom";

const Dogs=()=>{
const [dogs, setDogs] = useState([])

const [isAuth, setIsAuth] = useState(true)
const navigate=useNavigate()
    const fetchDogs=async()=>{
        const res=await fetch('https://dog.ceo/api/breeds/list/all');
        const data=await res.json();
        setDogs(Object.keys(data.message));
    }
    useEffect(() => {
    fetchDogs()
    }, [])

    const navigateToDogPage=(dogName)=>{
        navigate(`${dogName}`)
    }
    
    return(
        <div>
            <input type="checkbox" checked={isAuth} onChange={()=>setIsAuth(!isAuth)}/>

            {/* Navigate Component */}
            {/* <Navigate to={isAuth? `${dog}`:'/home'}/> */}

            {
                dogs?.map((dog)=>(
                    // Navigate with useNavigate hook

                    <div onClick={()=>navigateToDogPage(dog)}>
                    <h1 key={dog} >{dog}</h1>
                    {/* Navigate with Link Component */}

                    {/* <Link key={dog} to={`${dog}`}>{dog}</Link> */}
                    </div>
              ))
            }
            <Outlet/>
        </div>
    )
}

export default Dogs;