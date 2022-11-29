
import './App.css';
import Counter from './counter';
import { useState } from "react";


function App() {
  const [delta, setDelta] = useState(1)
  const [MaxNum, setMaxNum] = useState(1)

  function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
  }
  function changeMax(e){
  console.log(e);
  setMaxNum(Number(e.target.value))
  }

  return (
    <div className="App">
      <p>Delta Number <input type= "number" value = {delta} onChange = {handleDelta}/></p>
      <p>Max Number <input type= "number" value = {MaxNum} onChange={changeMax}/></p>
      <Counter MaxNum = {MaxNum} delta={delta} />
      <Counter delta={delta} MaxNum = {MaxNum}/>
    </div>
  );
}

export default App;
