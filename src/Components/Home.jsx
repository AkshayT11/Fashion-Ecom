import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 '>
        {/* content */}
        <div className='space-y-4  '>
            <h1 className='text-4xl lg:text-5xl font-semibold my-1 '> Discovering and Defining Your Own Fashion!</h1>
            <p className='w-full lg:w-3/4 font-medium'>Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style.</p>
          <button className='bg-blue-500 px-4 py-2 border-none text-white rounded-lg cursor-pointer'>Shop Now</button>
        </div>

        {/* image section  */}
        <div className=' bg-DarkColor rounded-tr-[290px] rounded-tl-5xl p-5 mt-10'>
            <img src="https://img.freepik.com/premium-photo/woman-standing-by-potted-plants_1048944-16402036.jpg?w=1060" alt="hero-img" className='-ml-5 -mb-5 rounded-tr-[190px]'  width={600} />
        </div>
    </div>
  )
}

export default Home