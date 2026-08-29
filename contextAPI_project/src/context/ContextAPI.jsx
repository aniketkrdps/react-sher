import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children}) => {

   

    let [cartItems,setCartItems] = useState([])
    console.log(cartItems)

    let increment = (id) => {
        setCartItems((prev) => {
            return prev.map((elem) => {return elem.id === id ? {...elem,quantity:elem.quantity+1} : elem })})
    }

   let decrement = (id) => {
    setCartItems((prev)=> {
        return prev.map((elem) => {
            return elem.id === id ? {...elem,quantity:elem.quantity-1} : elem
        }).filter((elem) => {
            return elem.quantity > 0
        })
    })
}
    return (
        <MyStore.Provider value={{cartItems,setCartItems,decrement,increment}}>
        {children}
    </MyStore.Provider>
    )
}
    
    