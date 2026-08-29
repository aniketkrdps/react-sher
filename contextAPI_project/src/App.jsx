import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductsCard from './components/ProductsCard'
import CartScreen from './components/CartScreen'
import { MyStore } from './context/ContextAPI'

const App = () => {

  let {cartItems} = useContext(MyStore)

  let [products,setProducts] = useState([])
  let [cartScreen,setCartScreen] = useState(false)



  let productsData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }

  useEffect(() => {
  productsData()
    
  }, [])
  
  

  return (
    <div>
      <Navbar setCartScreen={setCartScreen} />

      {cartScreen ? <CartScreen setCartScreen={setCartScreen}/> : <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((elem) => {
          let inCart = cartItems.find((val) => val.id ===elem.id)
          return <ProductsCard product={elem} key={elem.id} inCart={inCart}/> })}</div>  }
        
    </div>
  )
}

export default App
