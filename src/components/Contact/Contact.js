import { APIProvider } from "@vis.gl/react-google-maps";
import MapView from "./MapView";
import "./Contact.css";
// import ContactImage from "../../assets/Contactusimage.jpg"
import ContactImg from "../../assets/Contact_us.jpg";

//AIzaSyDAOgLO8tjRQZURr5Q1zdANJjfQqVp4v3s
const Contact = () => {
  // const api_key = 'AIzaSyDAOgLO8tjRQZURr5Q1zdANJjfQqVp4v3s'
  const api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <>
      <div className="bg-white">
        {/* <div
          className="container relative h-52 bg-cover bg-center"
          style={{ backgroundImage: `url(${ContactImg})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-5xl font-bold font-serif">
              Contact US
            </p>
          </div>
        </div> */}
        <div className="container flex justify-center items-center pt-5 bg-white">
            
          <form>
            <p
              className="text-5xl flex justify-center items-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get In Touch
            </p>
            <div className="mt-5 flex flex-col">
                <div className="flex flex-col md:flex-row">
              <input
                type="text"
                className="bg-white border-2 border-yellow-400  p-4 text-black w-full md:w-96 mb-5 placeholder-black mr-1"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="bg-white border-2 border-yellow-400  p-4 text-black w-full md:w-96 mb-5 placeholder-black"
                placeholder=" Email"
              />
              </div>
              <input
                type="Number"
                className="bg-white border-2 border-yellow-400 p-4 text-black mb-5 placeholder-black"
                placeholder="Phone Number"
              />
              <textarea
                className="bg-white border-2 border-yellow-400 p-4 text-black  mb-5 placeholder-black"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
              >
                Submit
              </button>
            </div>
          </form>
          {/* <div>Shahid</div> */}
        </div>
        <div className="flex justify-center items-center">
          <APIProvider apiKey={api_key}>
            <MapView />
          </APIProvider>
        </div>
      </div>
    </>
  );
};

export default Contact;
