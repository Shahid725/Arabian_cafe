import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="container bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex  justify-center items-center mb-8">
            <div className="flex space-x-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="mailto:example@example.com"
                className="hover:text-gray-400"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* justify-items-center */}
            <div>
              <h3 className="text-4xl font-semibold mb-2 text-yellow-500" style={{fontFamily: "Itim, cursive"}}>Contact Us</h3>
              <p>123 Main St, City, Country</p>
              <p>Ramanagaram dist</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold mb-2 text-yellow-500" style={{fontFamily: "Itim, cursive"}}>Services</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Catering Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Function organization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Birth day Parties
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl font-semibold mb-2 text-yellow-500" style={{fontFamily: "Itim, cursive"}} > Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-400">
                  About US
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  Privacy and Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>          
        </div>
        
      </footer>
      <div className="container text-center text-sm text-white p-5  bg-gray-800">
            <p>&copy; {new Date().getFullYear()} Arabian Cafe All rights reserved.</p>
        </div>
    </>
  );
};

export default Footer;
