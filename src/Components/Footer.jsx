import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='mt-8 md:mt-0 bg-PrimaryColor text-ExtraDarkColor rounded-t-2xl'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div>
                <Link to='home'>
                <h1 className='text-3xl font-semibold pb-3'>FashionStyle</h1>
                </Link>
                <div className='flex gap-4 mt-1'>
                <FaFacebook size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out ' />
                <FaXTwitter size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out' />
                <FiInstagram size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out' />
                </div>
            </div>
                {/* another section */}
                <section>
                    <h1 className='text-xl font-semibold pb-4 pt-5 md:pt-0'>Shop</h1>
                    <div className='flex flex-col gap-3'>
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > Products</Link> 
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > Overview</Link> 
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > Pricing</Link> 
                    </div>
                </section>

                <section>
                    <h1 className='text-xl font-semibold pb-4 pt-5 md:pt-0'>Company</h1>
                    <div className='flex flex-col gap-3'>
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > About Us</Link> 
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > Contact</Link> 
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > News</Link> 
                       <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400'  > Support</Link> 
                    </div>
                </section>

                <div className='w-full md:w-1/4'>
                    <h1 className='text-xl font-semibold pb-4 pt-5 md:pt-0'>Contact Us</h1>
                    <div className='flex flex-col gap-3'>
                    <p className='text-lg cursor-pointer'>Laxmi Road, Navjyot Chowk, Pune- 411001</p>
                    <p className='text-lg cursor-pointer'>www.FashionStyle.com</p>
                    <p>+917341506748</p>
                    </div>
                </div>

        </div>

        {/* last copyright */}
        <div>
            <p className='capitalize text-center py-4'>@copyright developed by <span className='text-black font-medium'>Akshay Telawade</span> | All right are reserved  </p>
        </div>
    </footer>
  )
}

export default Footer