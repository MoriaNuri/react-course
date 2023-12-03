import './App.css';
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Calc from './components/Calc';
import Home from './components/Home';

function App() {
  // שמירה בזיכרון המקומי של המשתמש ע"י ההוק שכתבנו 
  const [counter, setCounter] = useLocalStorage('counter',0)
  const [isOpen, setIsOpen] = useLocalStorage('open',false)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
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
    // מחיקת הצמדת אירועים בירידת הקומפוננטה
  return () => {
    window.removeEventListener('resize', handleResize)
  }
  // המערך תלויות ריק ולכן הצמדת האירוע תקרה פעם אחת בעליית הקומפוננטה
}, [])



  return (
    <div className="App">
    <button onClick={()=>setIsOpen(!isOpen)}>{isOpen?'close':'open'}</button>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>setCounter(0)}>Restart</button>
    {counter}
    {/* יוצג רק כאשר יש שגיאה */}
    {error && <div>error</div>}
    <Calc/>
    <Home/>
    </div>
  );
}

export default App;
