import './Counter.css';

import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const {MaxNum} = props
    const[count, setCount] = useState(1)

    // function incr(){
    //     setCount(
    //         function(oldCount){
    //             return oldCount +delta
    //         }
    //     )
    //     console.log(count)
    // }
    function incr(){
        if (count+delta < MaxNum) {
            setCount(
                function(oldCount){
                    return oldCount +delta
                }
            )

        }
        else if (
            reset()
        )
        console.log(count)
        console.log(delta)
        console.log(MaxNum)
        console.log(props)
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

        <button onClick={incr}>Click to add {delta} to counter</button>
        <p><button onClick={reset}>Click to reset counter</button></p>
    </div>
  );
}

export default Counter;