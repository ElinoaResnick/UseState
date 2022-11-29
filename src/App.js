
import './App.css';
import Counter from './counter';
import { useState } from "react";


function App() {
  const [delta, setDelta] = useState(1)

  function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
  }

  return (
    <div className="App">
      <p><input type= "number" value = {delta} onChange = {handleDelta}/></p>
      <Counter delta={delta}/>
      <Counter delta={delta}/>
    </div>
  );
}

export default App;
