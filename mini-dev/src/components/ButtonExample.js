import React, { useState } from "react";

function ButtonExample() {
    const [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <p>
                Clicked { count } times.
            </p>
            <button onClick={onButtonClick}> Click to increment me 🥺</button>
        </div>
    )
}



export default ButtonExample;