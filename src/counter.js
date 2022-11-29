import './Counter.css';

import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount +delta
            }
        )
        console.log(count)
    }
    function handleDelta(e){
        console.log(e);
        setDelta(Number(e.target.value))
    }
    function reset(){
        setCount(0
            // function(oldCount){
            //     return oldCount =1
            // }
        )
    }
  return (
    <div>
        <h1 className="header">Counter</h1>
        <p>Counter is at {count}</p>
        <p><input type= "number" value = {delta} onChange = {handleDelta}/></p>
        <button onClick={incr}>Click to add {delta} to counter</button>
        <p><button onClick={reset}>Click to reset counter</button></p>
    </div>
  );
}

export default Counter;