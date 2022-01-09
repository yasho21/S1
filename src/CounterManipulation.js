import { useContext } from "react";
import counterContext from "./Contexts/CounterContext";


const CounterManipulation=()=>{
    const context=useContext(counterContext);
    const {counter,setCounter}=context;

    return(
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>

        </div>
    )

}

export default CounterManipulation;