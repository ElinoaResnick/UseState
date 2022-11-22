import './Counter.css';

import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount +1
            }
        )
        console.log(count)
    }
    function reset(){
        setCount(
            function(oldCount){
                return oldCount =1
            }
        )
        console.log(count)
    }
  return (
    <div>
        <h1 class="header">Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to counter</button>
        <p><button onClick={reset}>Click to reset counter</button></p>
    </div>
  );
}

export default Counter;