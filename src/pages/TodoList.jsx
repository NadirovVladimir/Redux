import { useState } from "react"
import {v4} from 'uuid'

export const TodoList = () => {
    const [state,setState] = useState([])
    const [text,setText] = useState('')

    const change = ({currentTarget:{value}}) => {
      setText(value)
    }

    const addTodo = () => {
        const id = v4()
            setState((prev) => [...prev,{text,isCompleted:false,id}])
            setText('')
    }
    const toggleCompleted = (id) => {
    const copyState = [...state]

    const newState = copyState.map(item => {
        if(item.id === id){
          return {...item, isCompleted: !item.isCompleted}
        }

        return item
    })

    setState(newState)
    }
    return( 
    <div>
        <input onChange={change}/>
        <button disabled = {text.length === 0} onClick={addTodo}>CLICK</button>

        <div>
            {state.map(({id, text, isCompleted}) => (
            <div key={id}>
                <h2>{text}</h2>
                <input type="checkbox" checked = {isCompleted} 
                onChange={()=> toggleCompleted(id)}
                />
            </div>
            ))}
        </div>
    </div>
    )
}