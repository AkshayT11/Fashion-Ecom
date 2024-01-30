import React from 'react'
import { useDispatch } from 'react-redux'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { decrementQty, incrementQty, removeFromCart } from '../redux/slices/CartSlice';



const CartProduct = ({id,img,title,price,qty}) => {
    const dispatch = useDispatch()

  return (
    <div className='flex justify-between items-center my-5 '>
        <div className='flex items-center gap-4'>
            <img className='h-[80px] rounded-md ' src={img} alt="cartImg" />
            <div className='space-y-4'>
                <h2 className='font-semibold text-[17px] '>{title} </h2>
                <div className='flex justify-center gap-4 items-center '>
                <FiMinus 
                onClick={()=> dispatch(decrementQty({id})) }
                size={20}  className='border border-blue-400 rounded-md p-1 hover:bg-red-500 cursor-pointer' />
                <p className='font-semibold text-sm text-gray'> {qty} </p>
                <FaPlus 
                onClick={()=> dispatch(incrementQty({id})) }
                size={20} className='border border-blue-400 rounded-md p-1 hover:bg-green-500 cursor-pointer'  />
                </div>
                <p className='font-semibold text-[17px] text-gray-600 text-center py-3'>price: ${price} </p>

            </div>
        </div>
        <MdDelete
        onClick={()=> dispatch(removeFromCart(id)) }
        className='text-red-500 cursor-pointer' 
         size={26} />

    </div>
  )
}

export default CartProduct