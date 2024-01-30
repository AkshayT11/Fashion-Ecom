import React from 'react'

import CarousalCard from '../Layout/CarousalCard'

const Features = () => {

    const data = [
        {
            id: 6,
            img: "/img/product7.jpg",
            name: "FrostFire Outerlayers",
            price: "398.00",
            discount: "24% Off",
          },
          {
            id: 7,
            img: "/img/product8.jpg",
            name: "DaintyDoll Dresses",
            price: "258.00",
            discount: "40% Off",
          },
          {
            id: 8,
            img: "/img/product9.jpg",
            name: "TrendTraverse Bag",
            price: "104.00",
            discount: "35% Off",
          },
          {
            id: 9,
            img: "/img/product10.jpg",
            name: "Fitness Footgear",
            price: "299.00",
            discount: "40% Off",
          },
          {
            id: 10,
            img: "/img/product11.jpg",
            name: "UrbanBelle Hoodies",
            price: "129.00",
            discount: "28% Off",
          },
          {
            id: 11,
            img: "/img/product12.jpg",
            name: "Elite Handbags",
            price: "189.00",
            discount: "30% Off",
          },
    ]

  return (
    <div className='flex flex-col justify-center pt-24 min-h-screen'>
        {/* header section */}
        <h1 className='text-3xl font-semibold text-center'>Exclusive Products Features</h1>

        {/* card section */}
        <section className='flex flex-wrap justify-center gap-5 pt-8'>
            {data.map((item)=> (
            <div key={item.id}  className='md:w-2/4 lg:w-1/4'>
                <CarousalCard
                key={item.id}
                name= {item.name}
                img={item.img}
                price={item.price}
                discount={item.discount}
                id={item.id} />
                </div>
            ) )}
        </section>

    </div>
  )
}

export default Features