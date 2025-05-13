// src/components/AwardsSection.js
import React from 'react';
import Award1 from '../../assets/images/icons/award-1.png';
import Award2 from '../../assets/images/icons/award-2.png'; 
import Award3 from '../../assets/images/icons/award-3.png';
import floral from '../../assets/images/icons/floral.png';
import signature1 from '../../assets/images/signature.png';
import signature2 from '../../assets/images/signature-2.png';


const AwardsSection = () => {
  return (
    <div className="py-12 ">
      {/* Container */}
      <div className="max-w-[80%] mx-auto px-2 sm:px-4 lg:px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-gray-800">Delicieux</h3>
          <p className="text-gray-600 uppercase tracking-wide mt-2">
            Welcome to the Store
          </p>
          <span className="inline-block mt-4">
            <img
              src={floral}
              alt="Floral Icon"
              className="w-20 h-7 mx-auto"
            />
          </span>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Award 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg ">
            <img
              src={Award1}
              alt="Award 1"
              className="w-25 h-25 mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Bakery of the Year
              <span className="block text-md text-gray-500">2011 - 2012</span>
            </h4>
            <p className="text-gray-600 mt-2">
              Tart bear claw cake tiramisu chocolate bar gummies dragée lemon
              drops brownie. Jujubes chocolate cake sesame snaps.
            </p>
          </div>

          {/* Award 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg ">
            <img
              src={Award2}
              alt="Award 2"
              className="w-25 h-25 mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Cupcakes Shop of the Year
              <span className="block  text-md text-gray-500">2012 - 2015</span>
            </h4>
            <p className="text-gray-600 mt-2">
              Tart bear claw cake tiramisu chocolate bar gummies dragée lemon
              drops brownie. Jujubes chocolate cake sesame snaps.
            </p>
          </div>

          {/* Award 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg ">
            <img
              src={Award3}
              alt="Award 3"
              className="w-25 h-25 mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Bakery of the Month
              <span className="block text-md text-gray-500">2017 - 2018</span>
            </h4>
            <p className="text-gray-600 mt-2">
              Tart bear claw cake tiramisu chocolate bar gummies dragée lemon
              drops brownie. Jujubes chocolate cake sesame snaps.
            </p>
          </div>
        </div>
      </div>
      {/* Signature Block */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center max-w-[80%] mx-auto px-4">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <img
            src={signature1}
            alt="Signature Thumbnail"
            className="w-full h-full "
          />
        </div>
        <div className="md:w-2/3 text-center md:text-center ">
          <p className="text-gray-700 italic text-center">
            “It seems that every country that can get its hands on butter has
            its opinion of what butter cream frosting should be. Some are made
            with eggs and butter.”
          </p>
          <div className="mt-4 " >
            <small className="text-gray-500">Sunshine - CEO Bakery</small>
            <img
              src={signature2}
              alt="Signature"
              className="w-32 mt-2 mx-auto md:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AwardsSection;