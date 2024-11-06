import React, { useState } from "react";
import sideImage from "../../assets/hero.png";
import ContactImg from "../../assets/Contact_us.jpg"

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="container mx-auto bg-gradient-to-b from-green-500 to-blue-500 flex flex-col md:flex-row justify-center items-center pt-5 px-4">
       {/* <div
        className="relative w-full h-80 bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${sideImage})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <p className="text-white text-4xl font-bold">About Us</p>
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-4">
        <p className="text-lg font-bold">About Our Shop</p>
        <p className="text-lg">Coffee Distribution</p>
        <p className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {isExpanded && (
          <p className="mt-2">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        )}
        <button
          class="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          onClick={toggleText}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4 m-10">
        <img src={sideImage} className="w-full h-auto" alt="Image" />
      </div>
    </div>
  );
};

export default About;
