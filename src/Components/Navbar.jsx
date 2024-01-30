import React, { useState } from 'react'
import {Link} from "react-scroll"
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useSelector } from 'react-redux';


const Navbar = ({setShowCart,showCart}) => {
    const [toggle, setToggle] = useState(false);

    const cartData = useSelector((state)=> state.cart.cart )

    const totalQty = cartData.length;

    const closeMenu = ()=> {
        setToggle(!toggle)
    }

  return (
    <div className='fixed z-10  w-full '>   
         <div className=' p-5  md:px-32 px-5 bg-PrimaryColor shadow-md  ' >
        <section className='flex justify-between items-center' >
            {/* desktop menu section */}
            <div>
                <Link to='home' spy={true} smooth={true} duration={500} >
                <h1 className='text-2xl lg:text-3xl font-bold cursor-pointer text-green-400'>Fashion Style</h1>
                </Link>
            </div>
            <nav className='hidden lg:flex items-center gap-5 font-semibold text-lg text-ExtraDarkColor'>
               <Link to="home" spy={true} smooth={true} duration={500} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Home</Link>
               <Link to="shop" spy={true} smooth={true} duration={500} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Shop</Link>
               <Link to="features" spy={true} smooth={true} duration={500} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Features</Link>
               <Link to="arrivals" spy={true} smooth={true} duration={500} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Arrivals</Link>
               <Link to="reviews" spy={true} smooth={true} duration={500} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Review</Link>
            </nav>

            {/* nav icons */}
            <div className='flex justify-center pt-2 items-center gap-5 cursor-pointer relative'>
            <FaUserLarge size={26} />
            <FaShoppingCart
            onClick={()=> setShowCart(!showCart)}
             size={26} />
            <div className="absolute bg-red-600 bottom-[20px] left-[60px]  w-[25px] h-[25px]  rounded-full text-white flex justify-center text-sm items-center cursor-pointer ">{totalQty} </div>
            </div>

            {/* Menu icons */}
            <div onClick={()=> setToggle(!toggle) }  className=' cursor-pointer lg:hidden md:hidden' >
                { toggle ?  <IoClose size={26} /> : <FiMenu size={26} />  }
            </div>

            {/* Mobile Menu Section */}

            <div className={`${toggle ? "translate-x-0" : "-translate-x-full" } flex flex-col bg-red-400 gap-5  lg:hidden md:hidden  w-full text-white absolute top-16 left-0 font-semibold text-center pt-8 transition ease-in-out duration-500 `}>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Home</Link>
               <Link to="shop" spy={true} smooth={true} duration={500} onClick={closeMenu} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Shop</Link>
               <Link to="features" spy={true} smooth={true} duration={500} onClick={closeMenu} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Features</Link>
               <Link to="arrivals" spy={true} smooth={true} duration={500} onClick={closeMenu} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Arrivals</Link>
               <Link to="reviews" spy={true} smooth={true} duration={500} onClick={closeMenu} 
               className='cursor-pointer hover:text-black transition duration-500 ease-in-out ' >Review</Link>
            </div>

        </section>
        </div>

        </div>

    )
}

export default Navbar