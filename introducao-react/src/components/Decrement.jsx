import { useState } from "react"

export default function Decrement () {
    const [count, setcount] = useState(0)
    return (
        <>
        <h2>Decremento</h2>
        <h2>{count}</h2>
        <button onClick={() => setcount(count -1)}>-</button>
        
        </>
    )
}