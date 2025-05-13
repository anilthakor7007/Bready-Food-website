// src/components/AnimatedCounter.js
import React, { useState, useEffect, useRef } from 'react';




const CounterItem = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 text-yellow-600">{icon}</div>
      <h3 className="text-6xl font-bold text-gray-500">{count.toLocaleString()}</h3>
      <p className="text-4xl text-gray-600 mt-2">{label}</p>
    </div>
  );
};

const AnimatedCounter = () => {
  const counters = [
    {
      end: 165,
      label: 'Baker & Chef',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.39 1.19 4.5 3 5.74V17h8v-2.26c1.81-1.24 3-3.35 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.66-.83 3.13-2.11 4H9.11C7.83 12.13 7 10.66 7 9c0-2.76 2.24-5 5-5z" />
        </svg>
      ), // Chef hat icon
    },
    {
      end: 2130,
      label: 'Recipes',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ), // Book icon
    },
    {
      end: 3450,
      label: 'Bread per Day',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h3v2h2V8h6v2h2V8h3v11z" />
        </svg>
      ), // Bread icon
    },
    {
      end: 345,
      label: 'Kilos of Flour',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6v-1c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1zm0-3H6c-1.1 0-2-.9-2-2V6h16v8c0 1.1-.9 2-2 2z" />
        </svg>
      ), // Bag icon
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">About Us</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <CounterItem
              key={counter.label}
              end={counter.end}
              label={counter.label}
              icon={counter.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;