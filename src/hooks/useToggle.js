import { useState } from "react"

export const useToggle = (defaultState = false) => {
    const [state,setState] = useState(defaultState)

    const toggle = () => {
        setState(!state)
    }
    return [state,toggle]
}