import './App.css';
import React from 'react';
import Peoples from './components/Peoples'
import RandomColorButtonPanel from './components/RandomColorButtonPanel'
import TaskList from './components/TaskList'
import { ThemeProvider } from './ThemeContext';

const App=()=> {
  return (
    <ThemeProvider >
    <div className="App">
     <TaskList/>
     <RandomColorButtonPanel/>
     <Peoples/>
    </div>
    </ThemeProvider>
  );
}

export default App;
