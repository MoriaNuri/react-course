import React from 'react';

const Select=()=>{
    const [value, setValue] = React.useState([1,2])
    const handleChange=(event)=>{
        console.log(event.target.value);
        const newChoice=event.target.value;
        setValue(prev=>prev?.length>1? [prev[0],newChoice]:[...prev, newChoice])
        // if (value.length<1){

        //     setValue(prevChoice=>[...prevChoice, newChoice]
        //         )
        //     }
        //     else{
        //         const newArray=value
        //         newArray.pop()
        //         console.log(newArray);
        //         setValue(prevChoice=>[...newArray, newChoice])
        //     }
        // setOpen(prev=>!prev)
    }
    return(
        <div>
            <select multiple={true} value={value} onChange={handleChange}>
                <option  value="1">אשכולית</option>
                <option value="2">קוקוס</option>
                <option value="3">מנגו</option>
                <option value="4">ליים</option>
            </select>
        </div>
    )
}
export default Select;