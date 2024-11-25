"use client";
import Image from "next/image";
import React from "react";
import b1 from "../../public/IMAGES/b1.png";
import b2 from "../../public/IMAGES/b2.png";
import b3 from "../../public/IMAGES/b3.png";
import b4 from "../../public/IMAGES/b4.png";
import b5 from "../../public/IMAGES/b5.png";
import b6 from "../../public/IMAGES/b6.png";
import b7 from "../../public/IMAGES/b7.png";
import b8 from "../../public/IMAGES/b8.png";
import b9 from "../../public/IMAGES/b9.png";
import { IoStar } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1500, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const BurgerSlider = () => {
  return (
    <div>
      <div className="space-x-4 px-10">
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          autoPlay={true}
          swipeable={true}
          draggable={true}
        >
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b1} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="capitalize text-2xl font-bold">beefy bite</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(4)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">10.98$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b2} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="text-2xl font-bold capitalize">juicy melt</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(7)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex gap-10 py-2 justify-between">
              <h3 className="font-bold text-red-600 text-2xl">9.55$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b3} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="capitalize font-bold text-2xl">grill master</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(9)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">4.66$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b4} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="font-bold text-2xl capitalize">savory stack</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(4)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">8.55$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b5} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="capitalize text-2xl font-bold">patty pouch</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(14)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">10.12$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b6} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="font-bold capitalize text-2xl">bunzilla</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(24)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">12.87$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b7} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="font-bold capitalize text-2xl">sizzy burger</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(34)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">5.55$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b8} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="font-bold text-2xl capitalize">crunch burger</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(11)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">7.55$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
          <div className="1st flex flex-col bg-white p-2 justify-center items-center rounded-xl mx-2">
            <Image src={b9} alt="burger" className="w-[200px] h-[200px]" />
            <h2 className="capitalize font-bold text-2xl">brioche bliss</h2>
            <div className="flex items-center py-2">
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <p className="text-yellow-700 text-xl">
                <IoStar />
              </p>
              <span className="text-gray-600 text-xl pl-2">(6)</span>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Eveniet, nam.
            </p>
            <div className="flex justify-between gap-10 py-2">
              <h3 className="font-bold text-red-600 text-2xl">5.99$</h3>
              <button className="py-1 px-4 bg-[#ec7e16] hover:bg-[#218b50] text-white rounded-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BurgerSlider;
