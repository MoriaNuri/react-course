
import React from 'react';
import Products from './components/Products';
import Textarea from './components/Textarea';
import Select from './components/Select';
import CheckBox from './components/CheckBox';
import './App.css';
import Radio from './components/Radio';

function App() {
  const value="Value from App"
const [isCheck, setIsCheck] = React.useState(false)
const handleChange=(event)=>{
    console.log(event);
    setIsCheck(event.target.checked)
}
  return (
    <div className="App">
    {/* <Products/> */}
    {/* <Textarea name={value}/> */}
    {/* <Select/> */}
    {/* <CheckBox isCheck={isCheck} handleChange={handleChange}/> */}
    <Radio />
    </div>
  );
}

export default App;
