import { FaLocationArrow } from "react-icons/fa";

import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="container my-8 text-center p-12 rounded-md space-y-4  ">
        <h3 className="text-2xl text-white font-bold ">
          Subscribe For Get Update
        </h3>
        <h1 className="text-4xl font-bold text-white">
          Let's Find An Office Near You.
        </h1>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative max-w-xl mx-auto">
          <input
            type="search"
            className="block w-full p-4 ps-10  text-gray-900 border border-gray-300 rounded-full focus:outline-none bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email here"
            required
          />
          <button
            type="submit"
            className="text-white  absolute end-2.5 bottom-2 bg-teal-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-xl rounded-full p-3 "
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
