import './App.css'
import { useState, useCallback } from 'react'
import  Content from './Content'
  
function App() { 
  const [count, setCount] = useState(0)
  
  const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
  }, [])
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      
      <button onClick={() => setShow(!show)}>Chat</button>
      {show && <Content onIncrease={handleIncrease} />}
      <h2>{count}</h2>
    </div>
  );
}

export default App;
