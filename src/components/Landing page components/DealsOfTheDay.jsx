import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg/home-product.jpg';
import floral from '../../assets/images/icons/floral.png';
import pdct1 from '../../assets/images/products/1.png';
import pdct2 from '../../assets/images/products/2.png';
import pdct3 from '../../assets/images/products/3.png';
import pdct4 from '../../assets/images/products/4.png';
import pdct5 from '../../assets/images/products/5.png';
import pdct6 from '../../assets/images/products/6.png';
import badgeNew from '../../assets/images/icons/badge-red.png';
import badge50 from '../../assets/images/icons/badge-brown.png';

const DealOfTheDay = () => {
  const products = [
    { id: 1, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 299.00', image: pdct1 },
    { id: 2, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 249.00', image: pdct2, badge: 'New' },
    { id: 3, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 349.00', image: pdct3, badge: 'New' },
    { id: 4, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 249.00', originalPrice: 'RS. 500', image: pdct4, badge: '50%' },
    { id: 5, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 399.00', image: pdct5 },
    { id: 6, title: 'Red Sugar Flower', categories: ['Bakery', 'Sweet', 'Bio'], price: 'RS. 499.00', image: pdct6 },
  ];

  return (
    <div
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">Deal of the Day</h3>
          <p className="text-gray-600 uppercase tracking-wide mt-2">Breads Every Day</p>
          <span className="inline-block mt-4">
            <img
              src={floral}
              alt="Floral Icon"
              className="w-20 h-8 mx-auto"
            />
          </span>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex rounded-lg overflow-hidden">
              {/* Product Thumbnail */}
              <div className="relative w-1/2 group overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
                />
                {product.badge && (
                  <span className={`absolute top-2 left-2 ${product.badge === '50%' ? 'text-brown-600' : 'text-red-600'}`}>
                    <img
                      src={product.badge === '50%' ? badgeNew : badge50}
                      alt="Badge"
                      className="w-10 h-10"
                    />
                    <i className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                      {product.badge}
                    </i>
                  </span>
                )}
                <Link to="/product-detail" className="absolute inset-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <ul className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <li>
                    <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700" title="Quick View">
                      🔍
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700" title="Favorite">
                      ❤️
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700" title="Add to Cart">
                      🛒
                    </a>
                  </li>
                </ul>
              </div>

              {/* Product Content */}
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <Link to="/product-detail" className="text-lg font-semibold text-gray-800 hover:text-yellow-600">
                    {product.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.categories.map((cat, index) => (
                      <React.Fragment key={index}>
                        <Link to="/product-list" className="hover:text-yellow-600">
                          {cat}
                        </Link>
                        {index < product.categories.length - 1 && ' - '}
                      </React.Fragment>
                    ))}
                  </p>
                  {/* Simple Rating Stars */}
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 font-bold mt-2">
                  {product.originalPrice && <span className="line-through text-gray-500 mr-2">{product.originalPrice}</span>}
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;