import React from "react";
import mainImage from "../../assets/main3.jpg";
import sideImage from "../../assets/hero.png";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
    <div
      className="container h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      {/* <div className="flex items-center justify-around h-full bg-black bg-opacity-50 "> */}
      <div className="flex flex-col md:flex-row items-center justify-around h-full bg-black bg-opacity-50">
        <div>
          <h1
            className="flex  text-white text-5xl font-bold "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Enjoy our
            <br></br>
            Delicious Meal
          </h1>
          <p className=" text-white">
            more-or-less normal distribution of letters, as opposed to using
          </p>
          <div className="my-2">
            <button
              type="button"
              className="mx-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              About US
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Call Now
            </button>

            {/* <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Buy now
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Choose plan
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button> */}
          </div>
        </div>
        <div>
          <img src={sideImage} height={600} width={600} alt="Image" className="rotate"/>
        </div>
      </div>
    </div>
    <About/>
    <Contact/>
    </div>
  );
};

export default Home;
