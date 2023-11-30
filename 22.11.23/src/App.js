import './App.css';
import Home from './components/Home'

function App() {

  useEffect(
    () => {
      console.log('Effect callback');
    },
  )

  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
