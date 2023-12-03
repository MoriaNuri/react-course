import './App.css';
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Calc from './components/Calc';
import Home from './components/Home';

function App() {
 // Save to local storage with custom hook
 // the counter saved in local storage and will be saved even if we refresh the page
  const [counter, setCounter] = useLocalStorage('counter',0)
  const [isOpen, setIsOpen] = useLocalStorage('open',false)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    // the callback function will be called every time the counter changes
    if (counter>5)  {
    console.log('error');
    setError(true)
    } else {
    setError(false)
 }
  }, [counter])
  
  React.useEffect(() => {
    const handleResize=()=>{
      console.log(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
    // return a function to clean up the event listener
  return () => {
    window.removeEventListener('resize', handleResize)
  }
   // the callback function will be called only once when the component mounts
}, [])



  return (
    <div className="App">
    <button onClick={()=>setIsOpen(!isOpen)}>{isOpen?'close':'open'}</button>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>setCounter(0)}>Restart</button>
    {counter}
    {/* the error display only if the counter is bigger than 5 */}
    {error && <div>error</div>}
    <Calc/>
    <Home/>
    </div>
  );
}

export default App;
