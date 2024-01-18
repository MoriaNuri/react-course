import { useOutletContext } from 'react-router-dom'

const Cart = () => {
    const [koko,cart,setCart] = useOutletContext()
    console.log(cart);
    return(
        <>
        cart
        {cart?.map((item)=>{
            return(
                <div>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.name} width={300} height={300} />
                </div>
            )
            
        }
        )}
        </>

    )
}

export default Cart