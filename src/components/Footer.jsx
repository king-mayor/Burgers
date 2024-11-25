import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#050408]">
      <div className="flex lg:justify-around lg:flex-row flex-col justify-start py-10 px-10 gap-2 lg:px-0 lg:gap-0">
        <div className="1st">
          <div className="flex items-center gap-2">
            <h1>
              <FaHamburger className="text-[#e0340c] text-3xl font-bold" />
            </h1>
            <h1 className="text-3xl font-bold text-gray-200">BurgerBite</h1>
          </div>
          <p className="text-md text-gray-200 py-2">
            Not your regular burger. We offer rich and nutritious burgers made
            with the best hands!
          </p>
          <h3 className="text-md text-gray-200">support@example.com</h3>
          <h2 className="text-2xl font-bold text-red-600">+(123) 2348 87378</h2>
        </div>
        <div className="2nd">
          <h2 className="text-2xl text-gray-200 font-bold">products</h2>
          <div className="py-2">
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Chicken Burger
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Beef Burger
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Crispy Burger
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Clasic Burger
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Delight Burger
            </p>
          </div>
        </div>
        <div className="3rd">
          <h2 className="text-2xl text-gray-200 font-bold">Quick Link</h2>
          <div className="py-2">
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Home
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              About
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Menu
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Products
            </p>
            <p className="text-md cursor-pointer text-gray-200 hover:text-yellow-700">
              Newsletter
            </p>
          </div>
        </div>
        <div className="4th">
          <h2 className="text-2xl uppercase">Opening Hours</h2>
          <div>
            <h3 className="text-lg text-gray-200">
              Monday - Friday :<span className="text-[#e0340c]">8am - 4pm</span>
            </h3>
            <h3 className="text-lg text-gray-200">
              Saturday : <span className="text-[#e0340c]">8am - 12am</span>
            </h3>
          </div>
          <div className="flex py-4 gap-4">
            <FaFacebook className="text-3xl font-bold cursor-pointer text-blue-600" />
            <FaInstagram className="text-3xl font-bold cursor-pointer text-red-600" />
            <FaTwitter className="text-3xl font-bold cursor-pointer text-blue-600" />
          </div>
        </div>
      </div>
      <div className="px-20">
        <hr />
      </div>
      <div className="text-center py-10">
        <p className="text-md text-gray-200">
          Copyright © 2024
          <span className="text-yellow-700"> Mayor Odegbaro</span>. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
