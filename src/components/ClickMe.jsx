import { useState } from "react";
const ClickMe=()=>{

    const [count, setCount]=useState(0);
    return (
        <div>
            <h1>Button clicked {count} times</h1>
            <button onClick={()=> setCount(count+1)}>Click me</button>

        </div>
    )
}
export default ClickMe;