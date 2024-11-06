import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open }) => {
    const NavBardata = [
        {
          id: 1,
          title: "Home",
          link: "/",
        },
        {
          id: 2,
          title: "About",
          link: "/about",
        },
        {
          id: 3,
          title: "Contact",
          link: "/contact",
        },
        {
          id: 4,
          title: "Menu",
          link: "/menu",
        },
        // {
        //   id: 5,
        //   title: "Order",
        //   link: "/order",
        // },
      ];
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-black text-white py-10 m-6 rounded-3xl ">
            <ul className="flex flex-col items-center justify-center gap-10">
            {NavBardata.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block py-1 px-3 hover:text-black font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
