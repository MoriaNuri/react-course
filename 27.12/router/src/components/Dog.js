import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"

const Dog=()=>{
    const [dogImage, setDogImage] = useState()

    const {name:dogName}=useParams()

    const fetchDogImage = async () => {
        try{
        const res = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`);
        const data = await res.json();
    
        if (data.status !== "success") throw new Error(data.message)
        else setDogImage(data.message);
        }catch(err){
            alert(err.status)
            console.log(err);
        }
    }

    useEffect(() => {
     fetchDogImage();
    }, [])
    
    return(
        <div >
                <p>{dogName}</p>
                {dogImage&&  <img src={dogImage} alt={dogName} width={300} height={300} />}
        </div>
    )
}

export default Dog;