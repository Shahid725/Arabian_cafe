import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoIosCafe } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <nav className="sticky top-0 z-20">
        <div className="container flex justify-between items-center py-8 bg-green-500 ">
          {/* logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <IoIosCafe />
            <p>Arabian</p>
            <p className="text-secondary">Cafe</p>
          </div>
          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {NavBardata.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* cart */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
          </div>
          {/* Mobile view */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {open && <ResponsiveMenu open={open} />}
    </>
  );
};

export default Navbar;
