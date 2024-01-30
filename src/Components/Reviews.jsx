import React from 'react'
import ReviewCard from '../Layout/ReviewCard'

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 '>
        {/* heading */}
        <h1 className='text-3xl font-semibold text-center lg:mt-14 mt-24 '>Feedback Corner</h1>
        {/* review card Section */}
        <div className='flex flex-col items-center justify-center lg:flex-row  gap-5 py-4 my-8 '>
            <ReviewCard name="Jay Sharma" />
            <ReviewCard name="Nikita Verma" />
            <ReviewCard name="Akshay Telawade" />
        </div>
    </div>
  )
}

export default Reviews