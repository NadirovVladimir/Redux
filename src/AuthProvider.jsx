import {  createContext, useEffect, useState } from "react";

export const authContext = createContext()


export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(null)

    const login = (token) => {
        setToken(token)
        localStorage.setItem('token',token)
    }
    const logOut = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

     useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
     },[])
    return <authContext.Provider value={{token,logOut,login}}>{children}
    </authContext.Provider>
}