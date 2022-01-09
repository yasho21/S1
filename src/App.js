import logo from './logo.svg';
import './App.css';
import counterContext from './Contexts/CounterContext';
import { useState } from 'react';
import CounterManipulation from './CounterManipulation';

function App() {
  const [counter, setCounter]=useState(0)
  return (
    <div className="App">
      <counterContext.Provider value={{counter,setCounter}}>
        <h1>{counter}</h1>
        <CounterManipulation></CounterManipulation>

      </counterContext.Provider>
      
    </div>
  );
}

export default App;
