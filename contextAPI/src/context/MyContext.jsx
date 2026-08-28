import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children}) => {
    let [cartItems,setCartItems] = useState([])
    let [toggle,setToggle] = useState(true)
    return (
    <MyStore.Provider value={{cartItems,setCartItems,toggle,setToggle}}>
        {children}
        </MyStore.Provider>
)
}