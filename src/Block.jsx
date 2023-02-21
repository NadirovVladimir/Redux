import { useReducer } from "react"

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const incrementAction =  {
    type:INCREMENT
}
const decrementAction =  {
    type :DECREMENT
}

const counterReducer = (state,{type}) => {
switch(type){
    case INCREMENT:
        return state + 1;
    case DECREMENT:
        return state - 1;
    default:
        return state;
}
}

export const Block = () => {
const [count,setCount] = useReducer(counterReducer,0)
    
const increment = () => {
  setCount(incrementAction)
}

const decrement = () => {
  setCount(decrementAction)
}
    return <div className="block">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h2>{count}</h2>
    </div>
}