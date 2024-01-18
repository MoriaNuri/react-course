import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root=()=>(
    <div style={{display:'flex', gap:'10px'}}>
        <NavLink to="/dogs">Dogs</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <Outlet/>
    </div>
    )

export default Root;
