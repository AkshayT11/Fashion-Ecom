import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const ReviewCard = ({name}) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 border border-green-700 p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor  transition duration-300 ease-in-out'>
        <div>
        <FaQuoteLeft />
        <h1 className='text-xl font-semibold  pt-4'>{name}</h1>
        </div>
        <p>I absolutely adore the trendy styles this store offers. The clothes fit so well and they look amazing on a curvy figure. I really appreciate this option The dress arrived earlier than expected, was of good quality, and fit perfectly </p>
    </div>
  )
}

export default ReviewCard