"use client";
import Image from "next/image";
import React from "react";
import { IoMdBicycle } from "react-icons/io";
import b1 from "../../public/IMAGES/b1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Hero = () => {
  return (
    <div className="">
      {/* <div className="w-full flex justify-center items-center"></div> */}
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        autoPlay={true}
        infinite={true}
        arrows={true}
      >
        <div className="flex items-center justify-center px-10 bg-[#002c64] py-10">
          <div className="lg:flex hidden">
            <Image src={b1} alt="hero-bg" />
          </div>
          <div>
            <h2 className="capitalize text-yellow-500 text-4xl font-semibold">
              fast food burger
            </h2>
            <h1 className="text-5xl font-bold uppercase text-gray-200 py-2">
              best<br></br> burgers
            </h1>
            <p className="text-gray-200 text-lg">
              Our burgers are the best because we perfectly balance flavor,
              quality, and love in every patty, bun, and topping, ensuring each
              bite is a mouthwatering experience that exceeds our customers'
              expectations.
            </p>
            <button className="flex items-center gap-1 text-white px-6 py-3 rounded-lg font-bold bg-[#218b50] hover:bg-[#05965a] my-4">
              <span className="text-2xl">
                <IoMdBicycle />
              </span>
              Order Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 bg-[#4e0101] py-10">
          <div className="lg:flex hidden">
            <Image src={b1} alt="hero-bg" />
          </div>
          <div>
            <h2 className="capitalize text-yellow-500 text-4xl font-semibold">
              tasty burger
            </h2>
            <h1 className="text-5xl font-bold uppercase text-gray-200 py-2">
              top<br></br> burgers
            </h1>
            <p className="text-gray-200 text-lg">
              Our burgers stand out as the top in town because of our commitment
              to using only the freshest, highest-quality ingredients, carefully
              crafted with love and precision to deliver an unbeatable taste
              experience.
            </p>
            <button className="flex items-center gap-1 text-white px-6 py-3 rounded-lg font-bold bg-[#227892] hover:bg-[#146179] my-4">
              <span className="text-2xl">
                <IoMdBicycle />
              </span>
              Order Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
