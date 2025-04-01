import React,{ useState } from "react";
const ClickMe=()=>{

    const [count, setCount]=useState(0);
    return (
        <p>
            <h1>Button clicked {count} times</h1>
            <button onClick={()=> setCount(count+1)}>Click me</button>

        </p>
    )
}
export default ClickMe;