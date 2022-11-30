import './Counter.css';

import { useState, useEffect } from "react";

function Counter(props) {
    const {delta, MaxNum, getReset, needToReset} = props
    const[count, setCount] = useState(0)
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset, getReset])

    // const {MaxNum} = props

    function incr(){
        if (count+delta < MaxNum) {
            setCount(
                function(oldCount){
                    return oldCount +delta
                }
            )

        }
        else if (
            setCount(0)
        )
        // console.log(count)
        // console.log(delta)
        // console.log(MaxNum)
        console.log(props)
    }

    function reset(){
        getReset(true)
        // setCount(0)
    }
  return (
    <div>
        <h1 className="header">Counter</h1>
        <p>Counter is at {count}</p>

        <button onClick={incr}>Click to add {delta} to counter</button>
        <p><button onClick={reset}>Click to reset counter</button></p>
    </div>
  );
}

export default Counter;