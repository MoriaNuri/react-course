import React from 'react';

const Textarea=(props)=>{
    console.log(props);
    // const value=props.value;
    const {name}=props;

    const [value, setValue] = React.useState(name)
    const handleChange=(event)=>{
        console.log(event);
        setValue(event.target.value)
    }
    return(
        <textarea value={value} onChange={handleChange} limit="2"/>
    )
}
export default Textarea;