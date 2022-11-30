
import './App.css';
import Counter from './counter';
import { useState } from "react";


function App() {
  const [delta, setDelta] = useState(1)
  const [MaxNum, setMaxNum] = useState(10)
  const [reset, setReset] = useState(false)
  const [maxNumberEver, setMaxNumEver] = useState(0)

  function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
  }
  function changeMax(e){
    console.log(e);
    setMaxNum(Number(e.target.value))
  }


  function getReset(data){
      console.log(data)
      setReset(data)
  }

  function getMaxNumEver(number){
    console.log(number)
    if(number>maxNumberEver){

      setMaxNumEver(number)
    }
  }

  return (
    <div className="App">
      <p className='Max'>Max Number <br/>
      <input type= "number" value = {MaxNum} onChange={changeMax}/></p><br/>
      <p className='Delta'>Delta Number <br/>
      <input type= "number" value = {delta} onChange = {handleDelta}/></p> <br/>
      <p>Maximum value {maxNumberEver}</p>
      <Counter MaxNum = {MaxNum} delta={delta} getReset = {getReset} needToReset = {reset} getMaxNumEver = {getMaxNumEver}/>
      <Counter delta={delta} MaxNum = {MaxNum} getReset = {getReset} needToReset = {reset} getMaxNumEver = {getMaxNumEver}/>
    </div>
  );
}

export default App;
