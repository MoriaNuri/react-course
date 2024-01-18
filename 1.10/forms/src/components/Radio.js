import React from 'react';

const Radio=()=>{
    const [selectedOption, setSelectedOption] = React.useState('option1')

    const handleChange=(event)=>{
  
        console.log(event.target.name);
        console.log(event.target.value);
        setSelectedOption(event.target.name)
    }
    return(
    <form>
        <label>

        <input type="radio" onChange={handleChange} name="option1" checked={selectedOption==='option1'}/>
        Option 1
        </label>
        <label>

        <input type="radio" name="option2" onChange={handleChange} checked={selectedOption==='option2'}/>
        Option 2
        </label>
    </form>
    )
}
export default Radio;