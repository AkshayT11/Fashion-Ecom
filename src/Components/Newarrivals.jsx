import React from "react";
import CarousalCard from "../Layout/CarousalCard";

const Newarrivals = () => {
  const data = [
    {
      id: 12,
      img: "/img/product13.jpg",
      name: "Canvas Sneakers",
      price: "298.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: "/img/product14.jpg",
      name: "shirt combo pack ",
      price: "199.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: "/img/product15.jpg",
      name: "Hublot watch",
      price: "198.00",
      discount: "26% Off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      <div>
        <h1 className="text-3xl font-semibold text-center my-1">
          New Arrivals
        </h1>
      </div>
      {/* cards section */}
      <div className="flex flex-wrap justify-center gap-5 pt-10">
        {data.map((val) => (
          <CarousalCard
            key={val.id}
            name={val.name}
            img={val.img}
            price={val.price}
            discount={val.discount}
            id={val.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Newarrivals;
