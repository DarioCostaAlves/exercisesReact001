import React,{useState} from "react"
export default function Count(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(prevCount => prevCount+1)
    }
    return(
        <div className="container-fluid--count">
            <p>You clicked {count} times!</p>
            <button onClick={handleClick}>Click me cabron</button>
        </div>
    )
}