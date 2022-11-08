import './App.css';
import { useState } from "react"
import SecondComponent from "./SecondSample"
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(10);

  function changeTheCount() {
    let x = count
    x++
    setCount(x)
  }

  return (
    <div >
      <h2 className='text-center p-5'>Count: {count}</h2>
      <div className='text-center' onClick={changeTheCount}>
        <Button variant="outline-danger">Change the count</Button>{' '}
      </div>

      <SecondComponent />
    </div>
  );
}

export default App;
