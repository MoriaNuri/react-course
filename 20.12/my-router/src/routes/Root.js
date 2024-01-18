import { Outlet,Link,NavLink } from "react-router-dom";
import React from 'react'

const Root = () => {
    const name="koko";
    const [cart, setCart] = React.useState([])
  return (
    <div>
     <nav>
      {/* <a> element */}

      {/* <a href="/home" >Home</a> */}
      {/* <a href="/about" >About</a> */}

      {/* Link component */}

      {/* <Link to="/home" >Home</Link> */}
      {/* <Link to="/about" >About</Link> */}

      {/* NavLink component */}
      
      <NavLink to="/home" >Home</NavLink>
      <NavLink to="/about" context={[cart,setCart]}>About</NavLink>
      <NavLink to="/cart" context={[cart,setCart]}>Cart</NavLink>
     </nav>
     <Outlet context={[name,cart,
setCart]}/>

    </div>
  );
};



export default Root;