import { Span } from "next/dist/trace";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-white py-4">
      <div className="flex justify-around items-center">
        <div className="1st">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl text-[#e0340c]">
              <FaHamburger />
            </h2>
            <h2 className="text-3xl">BurgerBite</h2>
          </div>
        </div>
        <div className="2nd flex flex-row gap-10">
          <Link
            href="#"
            className="text-black text-xl font-semibold hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-black text-xl font-semibold hover:text-red-600"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-black text-xl font-semibold hover:text-red-600"
          >
            Menu
          </Link>
          <Link
            href="#"
            className="text-black text-xl font-semibold hover:text-red-600"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-black text-lg font-semibold hover:text-red-600"
          >
            Contact
          </Link>
        </div>
        <div className="3rd flex gap-2">
          <button className="flex items-center gap-1 bg-[#002c64] text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700">
            <span className="text-2xl">
              <IoMdBicycle />
            </span>
            Order Now
          </button>
          <button className="flex items-center gap-1 bg-[#e0340c] text-white px-6 py-3 rounded-lg font-bold text-2xl hover:bg-[#218b50]">
            <FaShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
