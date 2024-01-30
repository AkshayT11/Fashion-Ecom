import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Collections from './Components/Collections'
import Features from './Components/Features'
import Newarrivals from './Components/Newarrivals'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import CartPage from './Components/CartPage'
import { Toaster } from 'react-hot-toast'




function App() {
  const [showCart, setShowCart] = useState(false)

  return (

    <div className='overflow-hidden'>
      <Navbar setShowCart={setShowCart}  />

      
    
      <div id="home">
        <Home/>
      </div>
      <div id="shop">
        <Shop/>
      </div>
      <div id="collection">
        <Collections/>
      </div>
      <div id="features">
        <Features/>
      </div>
      <div id="arrivals">
        <Newarrivals/>
      </div>

     { showCart && <CartPage setShowCart={setShowCart} showCart={showCart} />}  

      <div id="reviews">
        <Reviews/>
      </div>

      <Footer/>

    <Toaster position="top-center"
  reverseOrder={false}/>

    </div>
    

  )
}

export default App
