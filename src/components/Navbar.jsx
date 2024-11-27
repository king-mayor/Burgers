"use client";

// import { Span } from "next/dist/trace";

import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white py-4 fixed right-0 left-0 z-50">
      <div className="flex lg:justify-around justify-between items-center">
        <div className="1st">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl text-[#e0340c]">
              <FaHamburger />
            </h2>
            <h2 className="text-3xl">BurgerBite</h2>
          </div>
        </div>
        <div className="2nd lg:flex flex-row gap-10 hidden">
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
        <div className="3rd lg:flex gap-2 hidden">
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
        {/* NAVABAR SECTION */}
        <div className="">
          {show && (
            <div className="bg-[#002c64] fixed right-0 left-0 top-0 w-full h-screen lg:hidden"></div>
          )}
        </div>
        {show && (
          <div className="2nd flex flex-col fixed top-0 w-[50%] h-screen bg-black lg:hidden z-50 text-center items-center py-10 gap-8 -translate-x-4 duration-1000 border-r-2 border-[#e0340c]">
            <Link
              href="#"
              className="text-gray-200 text-2xl font-semibold hover:text-red-600"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-200 text-2xl font-semibold hover:text-red-600"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 text-2xl font-semibold hover:text-red-600"
            >
              Menu
            </Link>
            <Link
              href="#"
              className="text-gray-200 text-2xl font-semibold hover:text-red-600"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-200 text-2xl font-semibold hover:text-red-600"
            >
              Contact
            </Link>
            <button className="flex items-center gap-1 bg-[#002c64] text-white px-6 py-3 text-2xl rounded-lg font-bold hover:bg-red-700">
              <span className="text-2xl">
                <IoMdBicycle />
              </span>
              Order Now
            </button>
            <button className="flex items-center gap-1 bg-[#e0340c] text-white px-6 py-3 rounded-lg font-bold text-2xl hover:bg-[#218b50]">
              <FaShoppingBag />
            </button>
          </div>
        )}
        <div className="lg:hidden" onClick={handleToggle}>
          {show ? (
            <IoMdClose className="text-4xl text-[#e0340c] cursor-pointer absolute top-5 right-5" />
          ) : (
            <IoMenu className="text-4xl text-[#e0340c] cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
