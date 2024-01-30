import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import toast from "react-hot-toast"

const CarousalCard = ({img,id,name,price,discount}) => {

    const dispatch = useDispatch()

    // adding product to cartPage
    const addProductCart = ()=> {
        dispatch(addToCart({id,qty:1,img,name,price,discount}));
        toast.success("Product Added SuccessFully")
    }

  return (
    <div key={id} className='h-[370px] 2xl:h-[420px] text-black rounded-lg shadow-md cursor-pointer mb-2 '>
        <div>
            <img src={img} alt="carouImg"
            className='h-56 2xl:h-64 rounded-t-xl w-full' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl font-semibold py-3'>{name}</h1>
            <div className='flex gap-10 items-center'>
                <h2 className='font-medium text-lg'>${price} </h2>
                <h2 className='font-medium text-lg'>{discount} </h2>
            </div>
            <div className='flex gap-10 items-center pt-2'>
                <button 
                onClick={ addProductCart}
                className='bg-green-500 px-4 py-2 text-white rounded-md border-none hover:bg-green-600'>
                    Add To Cart
                    </button>
                    <div className='flex gap-3 items-center'>
                        <h3>4.5</h3>
                        <FaStar />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CarousalCard