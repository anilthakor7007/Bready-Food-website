import React, { useState, useEffect } from "react";
import bg from '../../assets/images/bg/testimonials.jpg'

const reviewsData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.",
    name: "Logan Paul",
    title: "CEO & Founder Invision",
    rating: 5,
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.",
    name: "Sarah Smith",
    title: "Marketing Director",
    rating: 4,
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.",
    name: "Mike Johnson",
    title: "CTO TechCorp",
    rating: 5,
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.",
    name: "Mike Johnson",
    title: "CTO TechCorp",
    rating: 5,
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        setIsTransitioning(false);
      }, 300); // Duration of stretch animation
    }, 3000); // Interval between review changes
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 1000);
  };

  return (

       
    <div 
    className="py-20   bg-cover bg-center bg-fixed px-4 sm:px-6 lg:px-8"
    style={{ backgroundImage: `url(${bg})` }} 
    >
      {/* Background Image Container with Fixed Height */}
      <div 
        className="relative w-full max-w-4xl md:h-[500px] h-[350px] lg:h-[500px] bg-cover bg-center bg-no-repeat mx-auto"
        
      >
        {/* Review Card Carousel */}
        {reviewsData.map((review, index) => (
          <div
            key={review.id}
            className={`absolute w-full h-full text-center bg-white/80 backdrop-blur-sm rounded-t-lg rounded-b-lg shadow-lg p-6 transition-opacity duration-500`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            <div className="flex flex-col items-center relative">
              <img
                src={review.image}
                alt={review.name}
                className="w-32 h-32 rounded-full absolute -top-22 border-2 border-white shadow-md"
              />
              <div className="pt-12">
                <div className="flex justify-center mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="sm:pt-5 md:pt-12">
                <p className="text-gray-800 text-center md:mb-10 md:px-20 text:md md:text-2xl lg:text-2xl">
                  "{review.text}"
                </p>
                <p className="border-b-2 border-yellow-500 pb-2 w-[50%] text-center mx-auto mb-5"></p>
                <p className="text-gray-900 text:md md:text-2xl lg:text-2xl">
                  <span className="font-bold">{review.name}</span> - {review.title}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 mt-5">
              {reviewsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-yellow-500 ${isTransitioning ? "w-8" : "w-3"}`
                      : "w-3 bg-white/50 hover:bg-yellow-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;