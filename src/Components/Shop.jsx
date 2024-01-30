import React from 'react'
import CarousalCard from '../Layout/CarousalCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Shop = () => {

    const data = [
        {
          id: 0,
          img: "/img/product1.jpg",
          name: "Nike Air",
          price: "198.00",
          discount: "20% Off",
        },
        {
          id: 1,
          img: "/img/product2.jpg",
          name: "Sportswear Futura",
          price: "208.00",
          discount: "40% Off",
        },
        {
          id: 2,
          img: "/img/product3.jpg",
          name: "Royal Collection",
          price: "104.00",
          discount: "35% Off",
        },
        {
          id: 3,
          img: "/img/product4.jpg",
          name: "t-shirt combo pack",
          price: "299.00",
          discount: "40% Off",
        },
        {
          id: 4,
          img: "/img/product5.jpg",
          name: "CozyCraze Hoodies",
          price: "159.00",
          discount: "23% Off",
        },
        {
          id: 5,
          img: "/img/product6.jpg",
          name: "LuxeLoom Purses",
          price: "189.00",
          discount: "30% Off",
        },
      ];

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1023,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    initialSlide:2,
                    
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:2,
                  
                }
            },
        ]
      };

  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14'>
        {/* Heading Section */}
        <div>
            <h1 className='text-4xl cursor-pointer text-center font-semibold'>Best Sellers</h1>
        </div>

        {/* carousel section */}
        <div className='mt-7'>
            <Slider {...settings}>
            { data.map((item)=> (

                <CarousalCard 
                key={item.id}
                name= {item.name}
                img={item.img}
                price={item.price}
                discount={item.discount}
                id={item.id}
                 />
            ) )
        }

      </Slider>

        </div>
    </div>
  )
}

export default Shop;