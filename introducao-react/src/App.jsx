import Decrement from "./components/Decrement";
import Increment from "./components/Increment";

export default function App () {
    //logica de programação
    return (
        //renderização na viewport
        <>
        <h1>Introdução ao React</h1>
        <Decrement></Decrement>
        <Increment/>
        </>
    )
}