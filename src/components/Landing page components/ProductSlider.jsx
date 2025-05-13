// src/components/ProductSlider.js
import React, { useState, useEffect } from 'react';
import IMG1 from '../../assets/images/banner/slider-5.png';
import IMG2 from '../../assets/images/banner/slider-6.png';

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: 'Chocolate Dream Cake',
      price: '$25',
      image: IMG1,
    },
    {
      id: 2,
      name: 'Vanilla Bliss Cake',
      price: '$22',
      image: IMG2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [products.length]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[90%] mx-auto py-8">
      {/* Slider Container */}
      <div className="relative overflow-hidden h-[600px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'z-10' : 'z-0'
            }`}
          >
            <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className={`mx-auto object-cover  h-[80%] md:h-[80%] transition-all duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
                }`}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {/* {product.name} */}
                </h3>
                {/* <p className="text-gray-600 mt-2">{product.price}</p> */}
                <button className="cursor-pointer mt-4 px-20 py-5 border-2 text-md text-yellow-500 rounded-full hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-70 z-10 transform -translate-y-1/2 text-red p-2  transition-colors duration-300"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 bottom-85 transform -translate-y-1/2 text-black p-2 transition-colors duration-300"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductSlider;