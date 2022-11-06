import './App.css';
import { useState } from "react"
import axios  from 'axios';

function App() {
  const [count, setCount] = useState(10);

  function changeTheCount() {
    let x = count
    x++
    setCount(x)
  }

  return (
    <div >
      <h2 style={{ textAlign: "center" }}>Count: {count}</h2>
      <button onClick={changeTheCount}>
        Change the count
      </button>
    </div>
  );
}

export default App;
