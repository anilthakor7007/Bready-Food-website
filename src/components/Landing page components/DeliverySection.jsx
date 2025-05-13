// src/components/DeliverySection.js
import React, { useActionState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg/delivery-form.jpg';

// Async form submission action
async function submitForm(previousState, formData) {
  try {
    // Simulate an async API call (replace with your actual logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', Object.fromEntries(formData));
    return { status: 'success', message: 'Form submitted successfully!' };
  } catch (error) {
    return { status: 'error', message: 'Submission failed. Please try again.' };
  }
}

const DeliverySection = () => {
  const [state, submitAction, isPending] = useActionState(submitForm, {
    status: 'idle',
    message: '',
  });

  return (
    <div
      className="py-20 bg-cover bg-center bg-fixed px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl max-h-max mx-auto md:px-10 p-5 sm:px-6 lg:px-8 bg-white bg-opacity-90 rounded-lg shadow-lg py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office at America */}
            <div className="text-gray-800">
              <h4 className="text-xl font-semibold uppercase">Office at America</h4>
              <h5 className="text-lg font-medium text-gray-600">Basement Company, New York</h5>
              <p className="mt-2 flex items-center">
                <span className="mr-2 text-gray-500">✉️</span>
                <a href="mailto:hello@bready.com" className="text-yellow-600 hover:text-yellow-700">
                  hello@bready.com
                </a>
              </p>
              <p className="mt-1 flex items-center">
                <span className="mr-2 text-gray-500">📞</span>
                +1 650-253-0000
              </p>
            </div>

            {/* Office at Paris */}
            <div className="text-gray-800">
              <h4 className="text-xl font-semibold uppercase">Office at Paris</h4>
              <h5 className="text-lg font-medium text-gray-600">189/32 Basement Company, Paris, France</h5>
              <p className="mt-2 flex items-center">
                <span className="mr-2 text-gray-500">✉️</span>
                <a href="mailto:hello@bready.com" className="text-yellow-600 hover:text-yellow-700">
                  hello@bready.com
                </a>
              </p>
              <p className="mt-1 flex items-center">
                <span className="mr-2 text-gray-500">📞</span>
                +1 650-253-0000
              </p>
            </div>

            {/* Office at Canada */}
            <div className="text-gray-800">
              <h4 className="text-xl font-semibold uppercase">Office at Canada</h4>
              <h5 className="text-lg font-medium text-gray-600">189/32 Basement Company, Paris, France</h5>
              <p className="mt-2 flex items-center">
                <span className="mr-2 text-gray-500">✉️</span>
                <a href="mailto:hello@bready.com" className="text-yellow-600 hover:text-yellow-700">
                  hello@bready.com
                </a>
              </p>
              <p className="mt-1 flex items-center">
                <span className="mr-2 text-gray-500">📞</span>
                +1 650-253-0000
              </p>
            </div>
          </div>

          {/* Delivery Form */}
          <div>
            <form className="space-y-6" action={submitAction}>
              <h3 className="text-2xl font-bold text-gray-800">Delivery Now</h3>
              <p className="text-gray-600">
                Delivery free wafer fruitcake. Pastry toffee wafer gingerbread liquorice. Apple pie gingerbread caramels toffee tart bonbon.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Phone Number <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full px-6 py-3 border border-yellow-600 text-yellow-700 rounded-md transition-colors duration-300 ${
                    isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 hover:text-white'
                  }`}
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </button>
                {isPending && <p className="mt-2 text-gray-600">⏳ Submitting your data...</p>}
                {state.status === 'success' && (
                  <p className="mt-2 text-green-600">{state.message}</p>
                )}
                {state.status === 'error' && (
                  <p className="mt-2 text-red-600">{state.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;