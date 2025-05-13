import React, { useActionState } from "react";
import LOGO from "../assets/images/logo-dark.png";
import pmt1 from "../assets/images/payment/1.png";
import pmt2 from "../assets/images/payment/2.png";
import pmt3 from "../assets/images/payment/3.png";

async function submitForm(prevState, formData) {
  try {
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data.email); // Extract and log the email properly

    return { status: 'success', message: 'Subscribed successfully!' };
  } catch (error) {
    return { status: 'error', message: 'Submission failed. Please try again.' };
  }
}


const Footer = () => {
  const [state, submitAction, isPending] = useActionState(submitForm, {
    email: "",
    status: "idle",
    message: "",
  });

  return (
    <>
      <div className="py-12 bg-blue-950">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <img src={LOGO} className="w-40 h-auto mx-auto" alt="Logo" />
              <p className="mt-5 text-white">
                Tart bear claw cake tiramisu chocolate bar gummies dragée lemon
                drops brownie.
              </p>
              <ul className="flex justify-center space-x-4 mt-3">
                {["f", "x", "f"].map((icon, index) => (
                  <li
                    key={index}
                    className="text-white bg-gray-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <a href="#">{icon}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-medium text-white">
                Get news & offers
              </h3>
              <div className="mt-3 w-full max-w-sm">
                <form action={submitAction} className="flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-grow text-white bg-transparent border border-white rounded-l-full p-3 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className={`p-3 border border-yellow-600 text-white bg-yellow-600 rounded-r-full transition duration-300 ease-in-out ${
                      isPending
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-yellow-500"
                    }`}
                    disabled={isPending}
                  >
                    {isPending ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
                {isPending && (
                  <p className="mt-2 text-gray-400">
                    ⏳ Submitting your data...
                  </p>
                )}
                {state.status === "success" && (
                  <p className="mt-2 text-green-500">{state.message}</p>
                )}
                {state.status === "error" && (
                  <p className="mt-2 text-red-500">{state.message}</p>
                )}
              </div>
              <p className="mt-3 text-gray-400">* Don't worry, we never spam</p>
              <div className="mt-5">
                <h3 className="text-3xl text-white">Contact Us</h3>
                <p className="mt-2 text-gray-400">
                  PO Box 16122 Collins Street West, Victoria 8007 Australia
                </p>
                <p className="mt-2 text-gray-400">
                  (+84) 7534 9773, (+84) 874 548
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-medium text-white">Opening Hours</h3>
              <div className="mt-5 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
              </div>
              <div className="mt-5 flex space-x-2">
                {[pmt1, pmt2, pmt3].map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    className="h-8 w-auto"
                    alt={`Payment method ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-15 bg-black text-white flex items-center justify-center">
        <p>
          © Copyright by <strong>Bready Store</strong>. Design by{" "}
          <span className="text-yellow-500">Anil Thakor</span>.
        </p>
      </div>
    </>
  );
};

export default Footer;
