import React from "react";
import { useOutletContext } from "react-router-dom";

const Child = () => {
    const [count,name] = useOutletContext();
    console.log(count,name);

    return (
        <div style={{color:count===80?'red':'blue'}}>
        Child
        </div>
    );
    };

    export default Child;