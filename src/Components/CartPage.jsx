import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../Layout/CartProduct'
import { IoClose } from "react-icons/io5";

const CartPage = ({setShowCart}) => {
    const [activeCart,setActiveCart] = useState(true)

 const cartItems = useSelector((state)=> state.cart.cart )

 const TotalQty = cartItems.reduce((acc,item)=> acc + item.qty , 0 )

 const TotalAmount = cartItems.reduce((acc,item)=> acc + item.qty * item.price, 0 )
 

  return (
    <div className= { `  bg-black/20 min-h-screen w-full fixed left-0 top-0 z-20 overflow-y-scroll`}>
        <div className= {` max-w-[400px] w-full min-h-full bg-white absolute top-0 right-0 p-6 ${activeCart ? "translate-x-0" : "-translate-x-full"} transition  duration-500 `}  >
            <IoClose
            onClick={()=> setShowCart(false) }
             className='absolute right-0 top-0 m-5 text-[28px] cursor-pointer hover:text-red-500 font-semibold ' />
            <h1 className='text-3xl font-semibold text-center my-3 mb-2 '>Cart Items</h1>

            <div className='mt-6 space-y-2'>
                {cartItems?.map((item)=> (
                    <CartProduct 
                    key={item.id}
                    id={item.id}
                    img = {item.img}
                    title= {item.name}
                    price = {item.price}
                    qty = {item.qty}
                    />

                ) )}
            </div>
               

                <div className=' text-xl py-4 flex justify-between items-center font-medium mt-5'>
                    <p>Total Qty: <span className='font-semibold'>{TotalQty}</span>  </p>
                    <p>Total Amount:  <span className='font-semibold'>$ {TotalAmount}</span>   </p>
                </div>

                <button className='bg-green-600 px-4 py-2 text-white rounded-lg border-none w-full my-4'>
                    Proceed to Buy
                </button>
               

        </div>
    </div>
  )
}

export default CartPage