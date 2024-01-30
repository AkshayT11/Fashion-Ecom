import React from 'react'

const Collections = () => {
  return (
    <div className='h-screen lg:h-[70ch] lg:flex-row flex flex-col justify-center items-center  bg-green-300 px-5 lg:px-32 mt-14 '>
        {/* img section */}
        <div className='flex justify-center w-full lg:w-2/4 pt-6'>
            <img src="src/assets/img/collection.png" alt="collecImg" />
        </div>
        {/* content */}
        <div className='lg:w-2/4 w-full flex flex-col gap-2 lg:text-start pt-5'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Best Winter Collection</h1>
            <h2 className='text-2xl capitalize font-semibold my-2'>Sale get up to 60% off </h2>
            <p>Stay fashionable all season long with our stylish range of winter wear online for women. From comfy sweaters to stylish coats, our collection of cold</p>
            <button className='bg-blue-500 px-4 py-2 border-none text-white text-[17px] font-semibold rounded-md  '>
                Shop Now
            </button>
        </div>
    </div>
  )
}

export default Collections