import React from 'react';
import floral from '../../assets/images/icons/floral.png';
import chef1 from '../../assets/images/people/1.png';
import chef2 from '../../assets/images/people/2.png';
import chef3 from '../../assets/images/people/3.png';
import chef4 from '../../assets/images/people/4.png';

const chefs = [
  { id: 1, img: chef1, name: 'Joun Olason', role: 'Master Chef' },
  { id: 2, img: chef2, name: 'Emily Johnson', role: 'Pastry Chef' },
  { id: 3, img: chef3, name: 'Michael Brown', role: 'Sous Chef' },
  { id: 4, img: chef4, name: 'Sarah Lee', role: 'Executive Chef' },
];

const AwardsSection = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Chefs</h3>
        <p className="text-gray-600 uppercase tracking-wide mt-2">Work With Passion</p>
        <span className="inline-block mt-4">
          <img src={floral} alt="Floral Icon" className="w-20 h-7 mx-auto" />
        </span>
      </div>

      {/* Chefs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chefs.map((chef) => (
          <div key={chef.id} className="flex flex-col sm:flex-row items-center gap-4  p-4 rounded-lg ">
            <img
              src={chef.img}
              alt={chef.name}
              className="w-[200px] h-auto object-cover rounded-lg"
            />

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{chef.name}</h3>
              <p><a href="#" className="text-yellow-600">{chef.role}</a></p>
              <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde est consequatur corrupti expedita!</p>

             <p className='mt-20'>Tel: 947 577 57</p>
             <p>juanmaster@bready.com</p>
              {/* Social Links */}
              <ul className="flex justify-center sm:justify-start space-x-2 mt-4">
                {['f', 'x', 'f'].map((icon, index) => (
                  <li
                    key={index}
                    className="text-white bg-gray-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <a href="#">{icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
